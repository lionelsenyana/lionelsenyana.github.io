// var assert = require('assert');
// var mentorRouter = require('../routes/mentor-routes');
// var autRouter = require('../routes/auth-routes');


// /*
//  * 1) Tests for getting a list of mentors:
//  */
// describe('mentors', function() {
//     describe('#readAllMentors(), with empty input', function() { 
//       var inputToken = null;
//       it('Should return empty because of invalid credentials', function() {
//         assert.equal(null, mentorRouter.readAllMentors(inputToken));
//       });
//     });
//   });
  
//   describe('mentors', function() {
//       describe('#readAllMentors(), with proper and valid credentials', function() {
//         global.savedUser = {};
//         global.savedUser.token = "90707359-a4cb-417d-a1eb-1fb39d0a07ad";
//         var inputToken = global.savedUser.token;
//         it('Should return mentors because of valid credentials', function() {
//           var allMentors = mentorRouter.readAllMentors(inputToken);
//           assert.equal(true, allMentors.length > 0);
//           assert.equal(2, allMentors.length); 
//           allMentors.forEach((currentMentor) => {
//               //Each of the fields shold NOT be null
//               assert.notEqual(null, currentMentor.mentorId);
//               assert.notEqual(null, currentMentor.firstName);
//               assert.notEqual(null, currentMentor.lastName);
//               assert.notEqual(null, currentMentor.email);
//             }
//           );
//           assert.notEqual(null, all)
//         });
//       });
//   });


//   /*
//    * 2) Tests to get a specific mentor
//    */