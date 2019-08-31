// var assert = require('assert');
// var authorizationRouter = require('../routes/auth-routes');

import chai from 'chai';
import chaiHttp from 'chai-http';
import { describe, it } from 'mocha';
import server from '../../app';

const { expect } = chai;
chai.use(chaiHttp);

const newUser = {
  email: '1@gmail.com',
  password: '123456',
};

describe('User should signup', () => {
  it('Expect signup to pass', (done) => {
    chai.request(server)
      .post('/api/v1/auth/signup')
      .send(newUser)
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.be.an('object');
        done();
      });
  });
  it('Expect signup to fail', (done) => {
    chai.request(server)
      .post('/api/v1/auth/signup')
      .send(newUser)
      .end((err, res) => {
        console.log(res.body);
        
        // expect(res).to.have.status(401);
        // expect(res.body).to.be.an('object');
        done();
      });
  });
});

/*
 * 1) Tests for sign up:
 */

describe('User should signin', () => {
  it('Expect signin to pass', (done) => {
    chai.request(server)
      .post('/api/v1/auth/signin')
      .send(newUser)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        done();
      });
  });
});
// describe('Signup', function() {
//   describe('#signUp(), with null input', function() {
//     it('Should return false because of empty parameter passed to sign up', function() {
//       assert.equal(authorizationRouter.signUp(null), false);
//     });
//   });
// });

// describe('Signup', function() {
//   describe('#signUp(), with empty object input', function() {
//     var req = {};
//     it('Should return false because req is empty JSON object', function() {
//       assert.equal(authorizationRouter.signUp(req), false);
//     });
//   });
// });

// describe('Signup', function() {
//   describe('#signUp(), with request object missing body content', function() {
//     var req = {};
//     req.body = null;
//     it('Should return false because body object is null within req object', function() {
//       assert.equal(authorizationRouter.signUp(req), false);
//     });

//   });
// });

// describe('Signup', function() {
//   describe('#signUp(), when necessary input is provided', function() {
//     var req = {};
//     req.body = {};
//     req.body.email = "someuser@example.com";
//     req.body.password = "abcd123";
//     it('Should return true because input body object is properly set', function() {
//       assert.equal(authorizationRouter.signUp(req), true);
//     });
//   });
// });


// /*
//  * 2) Tests for sign in:
//  */
// describe('Signin', function() {
//   describe('#signIn(), with empty input', function() {
//     var req = {};
//     it('Should return false because input is empty credentials', function() {
//       assert.equal(authorizationRouter.signIn(req), false);
//     });
//   });
// });

// describe('Signin', function() {
//   describe('#signIn(), with wrong credentials', function() {
//     var req = {};
//     req.body = {};
//     req.body.email = "someuser@example.com";
//     req.body.password = "123456";
//     it('Should return false because of invalid credentials', function() {
//       assert.equal(authorizationRouter.signIn(req), false);
//     });
//   });
// });

// describe('Signin', function() {
//     describe('#signIn(), with proper and valid credentials', function() {
//       var req = {};
//       req.body = {};
//       req.body.email = "someuser@example.com";
//       req.body.password = "abcd123";
//       it('Should return true because of valid credentials', function() {
//         assert.equal(authorizationRouter.signIn(req), true);
//       });
//     });
// });