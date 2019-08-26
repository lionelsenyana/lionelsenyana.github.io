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

router.post('/sessions', function (req, res) {
      res.set("Content-type", "application/json");
      console.log('About to create a mentorship session: <' + JSON.stringify(req.body) + '>');

      var token = req.body.token; // token will be validated once database is ready
      var mentorId = req.body.mentorId;

      var allMentors = [mentor1, mentor2]; // Using hard-coded values since there is no database
      
      var isMentorFound = false;
      var data = {};
      allMentors.forEach(
            (mentor) => {
                  if(mentor.mentorId === mentorId) {
                        data.sessionId = uuid();
                        data.mentorId = mentor.mentorId;
                        data.status = "pending";
                        isMentorFound = true;
                  }
            }
      );
      
      if(isMentorFound == true) {
            var specificMentorResponse = {};
            specificMentorResponse.status = 200;
            specificMentorResponse.data = data;
      
            res.status(200).send(specificMentorResponse);
      } else {
            var specificMentorResponse = {};
            var data = {};
            data.status = "failed";
            data.message = "Unable to create session";
            specificMentorResponse.data = data;
      
            res.status(401).send(specificMentorResponse);
      }

});


router.patch('/sessions/:sessionId/accept', function (req, res) {
      res.set("Content-type", "application/json");
      console.log('About to accept a session: <' + JSON.stringify(req.body) + '>');

      var token = req.body.token; // token will be validated once database is ready
      var mentorId = req.body.mentorId;

      var allMentors = [mentor1, mentor2]; // Using hard-coded values since there is no database
      
      var isMentorFound = false;
      var data = {};
      allMentors.forEach(
            (mentor) => {
                  if(mentor.mentorId === mentorId) {
                        data.sessionId = uuid();
                        data.mentorId = mentor.mentorId;
                        data.status = "accepted";
                        isMentorFound = true;
                  }
            }
      );
      
      if(isMentorFound == true) {
            var specificMentorResponse = {};
            specificMentorResponse.status = 200;
            specificMentorResponse.data = data;
      
            res.status(200).send(specificMentorResponse);
      } else {
            var specificMentorResponse = {};
            var data = {};
            data.status = "failed";
            data.message = "Unable to accept a session";
            specificMentorResponse.data = data;
      
            res.status(401).send(specificMentorResponse);
      }
});


router.patch('/sessions/:sessionId/reject', function (req, res) {
      res.set("Content-type", "application/json");
      console.log('About to accept a session: <' + JSON.stringify(req.body) + '>');

      var token = req.body.token; // token will be validated once database is ready
      var mentorId = req.body.mentorId;

      var allMentors = [mentor1, mentor2]; // Using hard-coded values since there is no database
      
      var isMentorFound = false;
      var data = {};
      allMentors.forEach(
            (mentor) => {
                  if(mentor.mentorId === mentorId) {
                        data.sessionId = uuid();
                        data.mentorId = mentor.mentorId;
                        data.status = "rejected";
                        isMentorFound = true;
                  }
            }
      );
      
      if(isMentorFound == true) {
            var specificMentorResponse = {};
            specificMentorResponse.status = 200;
            specificMentorResponse.data = data;
      
            res.status(200).send(specificMentorResponse);
      } else {
            var specificMentorResponse = {};
            var data = {};
            data.status = "failed";
            data.message = "Unable to reject a session";
            specificMentorResponse.data = data;
      
            res.status(401).send(specificMentorResponse);
      }
});


module.exports = router;