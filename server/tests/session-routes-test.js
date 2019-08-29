var assert = require('assert');
var sessionRouter = require('../routes/session-routes');


/*
 * 1) Tests for sign up:
 */
describe('session', function() {
  describe('#session(), with null input', function() {
    it('Should return false because of empty parameter passed to session', function() {
      assert.equal(session.sessions(null), false);
    });
  });
});

describe('Session', function() {
  describe('#session, with empty object input', function() {
    var req = {};
    it('Should return false because req is empty JSON object', function() {
      assert.equal(session.sessions(req), false);
    });
  });
});

describe('Session', function() {
  describe('#session(), with request object missing body content', function() {
    var req = {};
    req.body = null;
    it('Should return false because body object is null within req object', function() {
      assert.equal(sessionRouter.sessions(req), false);
    });

  });
});

describe('Session', function() {
  describe('#sessions(), when necessary input is provided', function() {
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

    it('Should return true because input body object is properly set', function() {
      assert.equal(sessionRouter.sessions(req), true);
    });
  });
});


/*
 * 2) Tests for accepting a session:
 */
describe('acceptingSession', function() {
  describe('#specificMentorResponse(), with input', function() {
    var req = {};
    it('Should return true because input is of acceptance', function() {
      assert.equal(sessionSessionId.specificMentorResponse(req), true);
    });
  });
});

describe('acceptingSession', function() {
  describe('#specificMentorResponse(), with input information', function() {
    data.sessionId = uuid();
    data.mentorId = mentor.mentorId;
    data.status = "pending";
    isMentorFound = true; 

    it('Should return true because of valid acceptance', function() {
      assert.equal(sessionRouter.specificMentorResponse(req), true);
    });
  });
});

/*
 * 2) Tests for rejecting a session:
 */
describe('rejectingSession', function() {
    describe('#specificMentorResponse(), with input', function() {
      var req = {};
      it('Should return true because input is for rejecting', function() {
        assert.equal(sessionSessionId.specificMentorResponse(req), true);
      });
    });
  });
  
  describe('rejectingSession', function() {
    describe('#specificMentorResponse(), with input information', function() {
      data.sessionId = uuid();
      data.mentorId = mentor.mentorId;
      data.status = "pending";
      isMentorFound = true; 
  
      it('Should return true because it is rejected', function() {
        assert.equal(sessionRouter.specificMentorResponse(req), true);
      });
    });
  });