let express = require('express');

let router = express.Router();
let dateFormat = require('dateformat');
var path = require('path');
const uuid = require('uuid/v4');
import jwt from 'jsonwebtoken';

let user = null;  // should be []
var admin = null;

let errorMessage = "";

// Specific to user routes
router.use(function timeLog (req, res, next) {
  console.log('User Router accessed at: '
      , dateFormat(new Date(), "yyyy-mm-dd hh:MM:ss"));
  next();
});

router.post('/signup', function (req, res) {

      res.set("Content-type", "application/json");

      if(router.signUp(req)) {
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
            /**
             * create a token
             */
            const payload = {
                  "email": req.body.email,
            }
            const token = jwt.sign(payload, 'LIO', {expiresIn: '1d'})

            data.token = token;           


            global.savedUser.token = data.token;
            data.message = "User created successfully";

            signupResponse.data = data;

            res.status(201).send(signupResponse);
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
            if(errorMessage) {
                  signupResponse.message = "Failed to register new user: " + errorMessage;
            } else {
                  signupResponse.message = "Failed to register new user";
            }
            res.status(401).send(signupResponse);
      }
});

router.signUp = function (req) {
      if( ( ! req) || ( ! req.body) ) {
            return false;
      } else {
            console.log('About to sign up a new user: <' + JSON.stringify(req.body) + '>');
            var isSignedUp = false;
            errorMessage = "";
            if(req.body.email) {
                  var profile = {};
                  if(global.allUsers) {
                        global.allUsers.forEach(
                              (currentSavedUser) => {
                                    if(currentSavedUser.email === req.body.email) {
                                          errorMessage += "user with email" + req.body.email + " is already registered";
                                          return false;
                                    }
                              }
                        );
                  }
                  profile.email = req.body.email;
                  profile.password = req.body.password;
                  if( ! profile.password) {
                        if( ! errorMessage)
                              errorMessage += "password is required";
                        else      
                              errorMessage += ", password required";
                  }
                  profile.firstName = req.body.firstName;
                  if( ! profile.firstName) {
                        if( ! errorMessage)
                              errorMessage += "firstName is required";
                        else      
                              errorMessage += ", firstName is required";
                  }

                  profile.lastName = req.body.lastName;
                  if( ! profile.lastName) {
                        if( ! errorMessage)
                              errorMessage += "lastName is required";
                        else      
                              errorMessage += ", lastName is required";
                  }

                  profile.address = req.body.address;
                  if( ! profile.address) {
                        if( ! errorMessage)
                              errorMessage += "address is required";
                        else      
                              errorMessage += ", address is required";
                  }

                  profile.bio = req.body.bio;
                  if( ! profile.bio) {
                        if( ! errorMessage)
                              errorMessage += "bio is required";
                        else      
                              errorMessage += ", bio is required";
                  }

                  profile.occupation = req.body.occupation;
                  if( ! profile.occupation) {
                        if( ! errorMessage)
                              errorMessage += "occupation is required";
                        else      
                              errorMessage += ", occupation is required";
                  }

                  profile.expertise = req.body.expertise;
                  if( ! profile.expertise) {
                        if( ! errorMessage)
                              errorMessage += "expertise is required";
                        else      
                              errorMessage += ", expertise is required";
                  }
                  if(errorMessage) {
                        return false;
                  }
                  if(profile.email.startsWith('admin')) {
                        // Since the Database is not available yet, the admin is saved in memory
                        admin = profile;
                        global.savedUser = admin;
                        global.savedUser.type = "admin";
                        isSignedUp = true;
                  } else {
                        // Since the Database is not available yet, the user is saved in memory
                        user = profile;
                        global.savedUser = user;
                        global.savedUser.type = "user";
                        isSignedUp = true;
                  }   
                  global.allUsers = [];
                  global.allUsers.push(global.savedUser);
                  return isSignedUp; // sign up is successful. This will change once DB is available
            } else {
                  errorMessage += "email is required";
            }
      }
};

router.post('/signin', function(req, res) {
      //set the header
      res.set("Content-type", "application/json");
      errorMessage = "";
      if(router.signIn(req)) {
            //
            var signinResponse =  {};
            signinResponse.status = 200;
            signinResponse.message = "User is successfully logged in";
            var data = {};


            //data.token = uuid();

            const payload = {
                  "email": req.body.email,
            }
            const token = jwt.sign(payload, 'LIO', {expiresIn: '1d'})

            data.token = token; 

            global.savedUser.token = data.token;
            data.message = "User is successfully logged in";

            signinResponse.data = data;

           return res.status(200).send(signinResponse);
      } else {
            var signinResponse =  {};
            signinResponse.status = 401;
            if(errorMessage) {
                  signinResponse.message = "Failed to log in user: " +  errorMessage;
            } else {
                  signinResponse.message = "Failed to log in user";
            }
            return res.status(401).send(signinResponse);

      }

});

router.signIn = function(req) {
      //should return true/false

      //algorithm
      /*
            1. get the username/email and password
            2. filter user or admin depending on the user type base on the email
            3. compare this filtered user passsowrd and the password in the request 
            3.1. if password matcheds then return true 
            3.2. if password doesn't match return false 
      */
      if(req && req.body) {
            const authUser = req.body;
            if( ! authUser.email) {
                  errorMessage = "email is required to log in";
            }
            if( ! authUser.password) {
                  if( ! errorMessage)
                        errorMessage = "password is required to log in";
                  else 
                        errorMessage += ", password is required to log in";
            }
            if(global.allUsers) {
                  let valid = false;
                  global.allUsers.forEach(
                        (currentUser) => {
                              if(currentUser && currentUser.email === authUser.email) {
                                    console.log("saved email <" + currentUser.email + ">");
                                    console.log("saved password <" + currentUser.password + ">");
                                    if(currentUser.password === authUser.password) {
                                          valid = true;
                                    }
                              } else {
                                    return false;
                              }
                        }
                  );
                  return valid;
            }
            else {
                  return false;
            }
       
      }
      else {
            return false;
      }
};

module.exports = router;
