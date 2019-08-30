// var assert = require('assert');
// var sessionRouter = require('../routes/session-routes');


// /*
//  * 1) Tests for accepting a session:
//  */
// describe('acceptingSession', function() {
//   describe('#specificMentorResponse(), with input', function() {
//     var req = {};
//     it('Should return true because input is of acceptance', function() {
//       assert.equal(sessionSessionId.specificMentorResponse(req), true);
//     });
//   });
// });

// describe('acceptingSession', function() {
//   describe('#specificMentorResponse(), with input information', function() {
//     var data = {};
//     data.sessionId = uuid();
//     data.mentorId = mentor.mentorId;
//     data.status = "pending";
//     isMentorFound = true; 

//     it('Should return true because of valid acceptance', function() {
//       assert.equal(sessionRouter.specificMentorResponse(req), true);
//     });
//   });
// });

// /*
//  * 2) Tests for rejecting a session:
//  */
// describe('rejectingSession', function() {
//     describe('#specificMentorResponse(), with input', function() {
//       var req = {};
//       it('Should return true because input is for rejecting', function() {
//         assert.equal(sessionSessionId.specificMentorResponse(req), true);
//       });
//     });
//   });
  
//   describe('rejectingSession', function() {
//     describe('#specificMentorResponse(), with input information', function() {
//       data.sessionId = uuid();
//       data.mentorId = mentor.mentorId;
//       data.status = "pending";
//       isMentorFound = true; 
  
//       it('Should return true because it is rejected', function() {
//         assert.equal(sessionRouter.specificMentorResponse(req), true);
//       });
//     });
//   });