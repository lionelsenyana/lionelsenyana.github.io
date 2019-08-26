var express = require('express');
var router = express.Router();
var dateFormat = require('dateformat');
var path = require('path');
const uuid = require('uuid/v4');

var user = null;  // should be []
var mentor = null;
var admin = null;


/* 
 * TODO: To be fixed once the database is present
 *  Since there is no database, mentors are hard-coded for now
 *
 */  
var mentor1 = {};
mentor1.mentorId = '1234';
mentor1.firstName = 'Joe';
mentor1.lastName = 'Doe';
mentor1.email = 'joe.doe@example.com';
mentor1.address = '123 main street';
mentor1.bio = '';
mentor1.occupation = 'Software Engineer';
mentor1.expertise = 'nodejs';

var mentor2 = {};
mentor2.mentorId = '456';
mentor2.firstName = 'Jane';
mentor2.lastName = 'Smith';
mentor2.email = 'jane.smith@example.com';
mentor2.address = '222 main street';
mentor2.bio = '';
mentor2.occupation = 'Software Engineer';
mentor2.expertise = 'JavaScript';


// Specific to user routes
router.use(function timeLog (req, res, next) {
  console.log('Mentor Router accessed at: '
      , dateFormat(new Date(), "yyyy-mm-dd hh:MM:ss"));
  next();
});

router.get('/mentors', function (req, res) {
      res.set("Content-type", "application/json");
      console.log('About to read all mentors: <' + JSON.stringify(req.body) + '>');

      var token = req.body.token; // token will be validated once database is ready

      var data = {};

      var data = [mentor1, mentor2];

      var mentorsResponse = {};
      mentorsResponse.status = 200;
      mentorsResponse.data = data;

      res.status(200).send(mentorsResponse);
});


router.get('/mentors/:mentorId', function (req, res) {
      res.set("Content-type", "application/json");
      console.log('About to read a specific mentor: <' + JSON.stringify(req.body) + '>');

      var token = req.body.token; // token will be validated once database is ready
      var mentorId = req.body.mentorId;

      var allMentors = [mentor1, mentor2]; // Using hard-coded values since there is no database
      
      var data = {};
      allMentors.forEach(
            (mentor) => {
                  if(mentor.mentorId === mentorId) {
                        data = mentor;
                  }
            }
      );
      
      var specificMentorResponse = {};
      specificMentorResponse.status = 200;
      specificMentorResponse.data = data;

      res.status(200).send(specificMentorResponse);
});


module.exports = router;