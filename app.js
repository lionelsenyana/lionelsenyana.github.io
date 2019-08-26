const express = require('express');
var authorizationRouter = require('./server/routes/auth-routes');
var userRouter = require('./server/routes/user-routes');
var mentorRouter = require('./server/routes/mentor-routes');
var sessionRouter = require('./server/routes/session-routes');

var path = require('path');
var requestBodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(express.static("UI"));

app.use(
      requestBodyParser.urlencoded(
            { 
                  extended: true 
            }
      )
);

app.use(requestBodyParser.json());

// landing page to Free Mentors application
app.get(['/', '/api/v1'], (req, res) => {
            res.sendFile(path.join(__dirname + '/UI/index.html'));
      }
);

app.use('/api/v1/auth', authorizationRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/mentor', mentorRouter);
app.use('/api/v1/sessions', sessionRouter);

app.listen(port, () => console.log(`Free mentors app listening on port ${port}.`));

