// var assert = require('assert');
// var userRouter = require('../routes/user-routes');

// /*
//  * 2) Tests for changing user type:
//  */

import chai from 'chai';
import chaiHttp from 'chai-http';
import { describe, it } from 'mocha';
import server from '../../app';

const { expect } = chai;
chai.use(chaiHttp);

const newUser = {
  email: '1@gmail.com',
  token: 'jwt',
};

describe('User should be changed to a mentor', () => {
  it('Expect change to pass', (done) => {
    chai.request(server)
      .patch('/api/v1/user/:userId')
      .send(newUser)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        done();
      });
  });
  it('Expect change to fail', (done) => {
    chai.request(server)
      .patch('/api/v1/user/:userId')
      .send(newUser)
      .end((err, res) => {
        console.log(res.body);
        
        expect(res).to.have.status(401);
        expect(res.body).to.be.an('object');
        done();
      });
  });
});

// describe('changeUserType', function() {
//     describe('#changeUserType(), with empty input', function() {
//       var req = {};
//       it('Should return false because input is empty credentials', function() {
//         assert.equal(userRouter.changeToMentorRespose(req), false);
//       });
//     });
//   });
  
//   describe('changeUserType', function() {
//     describe('#changeToMentorRespose(), with wrong credentials', function() {
//       var req = {};
//       req.body = {};
//       req.body.name = "Joe Doe";
//       req.body.userId = "1234";
//       it('Should return false because of invalid credentials', function() {
//         assert.equal(user.changeToMentorRespose(req), false);
//       });
//     });
//   });
  
//   describe('changeUserType', function() {
//       describe('#changeUserType(), with proper and valid credentials', function() {
//         var req = {};
//         req.body = {};
//         req.body.name = "Joe Doe";
//         req.body.userId = "1234";
//         it('Should return true because of valid credentials', function() {
//           assert.equal(userRouter.changeToMentorRespose(req), true);
//         });
//       });
//   });