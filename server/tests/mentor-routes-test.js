var assert = require('assert');
var mentorRouter = require('../routes/mentor-routes');


/*
 * 2) Tests for getting a list of mentors:
 */
describe('mentors', function() {
    describe('#mentors(), with empty input', function() {
      var req = {};
      it('Should return false because input is empty mentors information', 
      
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
      
      it('Should return false because of invalid credentials', function() {
        assert.equal(mentor.mentors(req), false);
      });
    });
  });
  
  describe('mentor', function() {
      describe('#mentors(), with proper and valid credentials', function() {
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

        it('Should return true because of valid credentials', function() {
          assert.equal(mentorRouter.mentors(req), true);
        });
      });
  });