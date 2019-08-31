// var assert = require('assert');
// var sessionRouter = require('../routes/session-routes');

// /*
//  * 1) Tests for creating a session:
//  */

import chai from 'chai';
import chaiHttp from 'chai-http';
import { describe, it } from 'mocha';
import server from '../../app';

const { expect } = chai;
chai.use(chaiHttp);

const newUser = {
  token: 'jwt',
};

describe('User should create sessions', () => {
  it('Expect to create sessions', (done) => {
    chai.request(server)
      .post('/api/v1/sessions')
      .send(newUser)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        done();
      });
  });
  it('Expect to fail to create sessions', (done) => {
    chai.request(server)
      .post('/api/v1/sessions')
      .send(newUser)
      .end((err, res) => {
        console.log(res.body);
        
        expect(res).to.have.status(401);
        expect(res.body).to.be.an('object');
        done();
      });
  });
});


// describe('sessions', function() {
//     describe('#createSessions(), with empty input', function() { 
//       var inputToken = null;
//       it('Should return empty because of invalid credentials', function() {
//         assert.equal(null, sessionRouter.createSessions(inputToken));
//       });
//     });
//   });

//   describe('sessions', function() {
//     describe('#createSessions(), with proper and valid credentials', function() {
//       global.savedUser = {};
//       global.savedUser.token = "90707359-a4cb-417d-a1eb-1fb39d0a07ad";
//       var inputToken = global.savedUser.token;
//       it('Should return sessions because of valid credentials', function() {
//         var allSessions = sessionrRouter.createSessions(inputToken);
//         assert.equal(true, allSessions.length > 0);
//         assert.equal(1, allSessions.length); 
//         allSessions.forEach((currentSessions) => {
//             //Each of the fields shold NOT be null
//             assert.notEqual(null, currentSessions.sessionId);
//             assert.notEqual(null, currentSessions.Questions);
//           }
//         );
//         assert.notEqual(null, all)
//       });
//     });
// });
// /*
//  * 2) Tests for accepting a session:
//  */
describe('Mentor should accept a session', () => {
    it('Expect to accept a session', (done) => {
      chai.request(server)
        .patch('/api/v1/sessions/:sessionId/accept')
        .send(newUser)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('object');
          done();
        });
    });
    it('Expect to fail to accept a session', (done) => {
      chai.request(server)
        .patch('/api/v1/sessions/:sessionId/accept')
        .send(newUser)
        .end((err, res) => {
          console.log(res.body);
          
          expect(res).to.have.status(401);
          expect(res.body).to.be.an('object');
          done();
        });
    });
  });


// describe('acceptingSession', function() {
// describe('#acceptSession(), with empty input', function() {
//      var inputToken = null;
//      it('Should return empty because of invalid credentials', function() {
//         assert.equal(null, acceptingSessionRouter.acceptSession(inputToken));
//       });
//     });
//   });

//   describe('acceptingSession', function() {
//     describe('#acceptingSession(), with proper and valid credentials', function() {
//       global.savedUser = {};
//       global.savedUser.token = "90707359-a4cb-417d-a1eb-1fb39d0a07ad";
//       var inputToken = global.savedUser.token;
//       it('Should return sessions because of valid credentials', function() {
//         var allSessions = acceptingSessionRouter.acceptingSession(inputToken);
//         assert.equal(true, allSessions.length > 0);
//         assert.equal(1, allSessions.length); 
//         allSessions.forEach((currentSessions) => {
//             //Each of the fields shold NOT be null
//             assert.notEqual(null, currentSessions.sessionId);
//             assert.notEqual(null, currentSessions.Questions);
//           }
//         );
//         assert.notEqual(null, all)
//       });
//     });
// });


// /*
//  * 3) Tests for rejecting a session:
//  */

describe('Mentor should reject a session', () => {
    it('Expect to reject a session', (done) => {
      chai.request(server)
        .patch('/api/v1/sessions/:sessionId/reject')
        .send(newUser)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('object');
          done();
        });
    });
    it('Expect to fail to reject a session', (done) => {
      chai.request(server)
        .patch('/api/v1/sessions/:sessionId/reject')
        .send(newUser)
        .end((err, res) => {
          console.log(res.body);
          
          expect(res).to.have.status(401);
          expect(res.body).to.be.an('object');
          done();
        });
    });
  });
// describe('rejectingSession', function() {
//     describe('#rejectingSession(), with empty input', function() {
//          var inputToken = null;
//          it('Should return empty because of invalid credentials', function() {
//             assert.equal(null, rejectingSessionRouter.rejectingSession(inputToken));
//           });
//         });
//       });
  
//       describe('rejectingSession', function() {
//         describe('#acceptingSession(), with proper and valid credentials', function() {
//           global.savedUser = {};
//           global.savedUser.token = "90707359-a4cb-417d-a1eb-1fb39d0a07ad";
//           var inputToken = global.savedUser.token;
//           it('Should return sessions because of valid credentials', function() {
//             var allSessions = acceptingSessionRouter.acceptingSession(inputToken);
//             assert.equal(true, allSessions.length > 0);
//             assert.equal(1, allSessions.length); 
//             allSessions.forEach((currentSessions) => {
//                 //Each of the fields shold NOT be null
//                 assert.notEqual(null, currentSessions.sessionId);
//                 assert.notEqual(null, currentSessions.Questions);
//               }
//             );
//             assert.notEqual(null, all)
//           });
//         });
//     });
    