var assert = require('assert');
var userRouter = require('../routes/user-routes');

/*
 * 2) Tests for changing user type:
 */
describe('changeUserType', function() {
    describe('#changeUserType(), with empty input', function() {
      var req = {};
      it('Should return false because input is empty credentials', function() {
        assert.equal(userRouter.changeToMentorRespose(req), false);
      });
    });
  });
  
  describe('changeUserType', function() {
    describe('#changeToMentorRespose(), with wrong credentials', function() {
      var req = {};
      req.body = {};
      req.body.name = "Joe Doe";
      req.body.userId = "1234";
      it('Should return false because of invalid credentials', function() {
        assert.equal(user.changeToMentorRespose(req), false);
      });
    });
  });
  
  describe('changeUserType', function() {
      describe('#changeUserType(), with proper and valid credentials', function() {
        var req = {};
        req.body = {};
        req.body.name = "Joe Doe";
        req.body.userId = "1234";
        it('Should return true because of valid credentials', function() {
          assert.equal(userRouter.changeToMentorRespose(req), true);
        });
      });
  });