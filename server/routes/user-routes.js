var express = require('express');
var router = express.Router();
var dateFormat = require('dateformat');
var path = require('path');

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
      console.log('About to sign up a new user: <' + JSON.stringify(req.body) + '>');

      var profile = {};
      profile.email = req.body.email;
      profile.password = req.body.password;

      if(profile.email.startsWith('admin')) {
            // Since the Database is not available yet, the admin is saved in memory
            admin = profile;
      }
      else {
            // Since the Database is not available yet, the user is saved in memory
            user = profile;
      }     

      res.sendFile(path.join(__dirname + 'UI/html/all-users.html'));
});

module.exports = router;