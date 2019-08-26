var express = require('express');
var router = express.Router();
var dateFormat = require('dateformat');
var path = require('path');
const uuid = require('uuid/v4');

var user = null;  // should be []
var mentor = null;
var admin = null;

// Specific to user routes
router.use(function timeLog (req, res, next) {
  console.log('User Router accessed at: '
      , dateFormat(new Date(), "yyyy-mm-dd hh:MM:ss"));
  next();
});

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
            signupResponse.status = 401;
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

router.post('/signin', function(req, res) {
      //set the header
      res.set("Content-type", "application/json");
      if(signIn(req)) {
            //
            var signinResponse =  {};
            signinResponse.status = 200;
            signinResponse.message = "User is successfully logged in";
            var data = {};
            data.token = uuid();
            data.message = "User is successfully logged in";

            signinResponse.data = data;

           return res.status(200).send(signinResponse);
      }else {
            var signinResponse =  {};
            signinResponse.status = 401;
            signinResponse.message = "Failed to log in new user";
            return res.status(401).send(signinResponse);

      }

})

function signIn(req) {
      //should return true/false

      //algorithm
      /*
            1. get the username/email and password
            2. filter user or admin depending on the user type base on the email
            3. compare this filtered user passsowrd and the password in the request 
            3.1. if password matcheds then return true 
            3.2. if password doesn't match return false 
      */
     const authUser = req.body;
     //filter user from user list (user)
     const userData = user.find(function(u) {
           return u.email === authUser.userNameEmail; // && u.password === authUser.password
     });

     if(userData) {
           // compare 
           if(userData.password === authUser.password) {
                 return true;
           }
           return false;
     }else {
           return false;
     }


}

module.exports = router;