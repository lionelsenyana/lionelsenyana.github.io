var express = require('express');
var router = express.Router();
var dateFormat = require('dateformat');
var path = require('path');
const uuid = require('uuid/v4');

var user = null;
var mentor = null;
var admin = null;

// Specific to user routes
router.use(function timeLog (req, res, next) {
  console.log('User Router accessed at: '
      , dateFormat(new Date(), "yyyy-mm-dd hh:MM:ss"));
  next();
});

// define the about route
router.post('/signup', function (req, res) {

      res.set("Content-type", "application/json");

      if(signUp(req)) {
            /*
            * The response structure, on success, follows instruction of JSON provided on page 13:
            * {
            *    "status": Integer: 201,
            *    "message": String: "User created successfully"
            *    "data": {
            *          "token": String,
            *          "message": "User created successfully"
            *    }
            * }
            */
            var signupResponse =  {};
            signupResponse.status = 201;
            signupResponse.message = "User created successfully";
            var data = {};
            data.token = uuid();
            data.message = "User created successfully";

            signupResponse.data = data;

            res.status(200).send(signupResponse);
      } else {
            // sign up failed:
            /*
            * The response structure, on failure, follows instruction of JSON provided on page 13:
            * {
            *    "status": Integer: 401,
            *    "message": String: "Failed to register new user"
            * }
            */
            var signupResponse =  {};
            signupResponse.status = 201;
            signupResponse.message = "Failed to register new user";
            res.status(401).send(signupResponse);
      }
});

function signUp(req) {
      console.log('About to sign up a new user: <' + JSON.stringify(req.body) + '>');
      var isSignedUp = false;

      var profile = {};
      profile.email = req.body.email;
      profile.password = req.body.password;

      if(profile.email.startsWith('admin')) {
            // Since the Database is not available yet, the admin is saved in memory
            admin = profile;
            isSignedUp = true;
      }
      else {
            // Since the Database is not available yet, the user is saved in memory
            user = profile;
            isSignedUp = true;
      }     
      return isSignedUp; // sign up is successful. This will change once DB is available
}

module.exports = router;