var express = require('express');
var mongoose = require('mongoose');
var cookieSession = require('cookie-session');
var passport = require('passport');
var keys = require('./config/keys');
require('./models/User');
require('./services/passport');
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');
mongoose.connect(keys.mongoURI);

var app = express();
app.use(bodyParser.urlencoded());

/*
    Here we are configuring our SMTP Server details.
    STMP is mail server which is responsible for sending and recieving email.
*/

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/mailRoute')(app);

/*--------------------Routing Over----------------------------*/

app.listen(4000, function() {
  console.log('Express Started on Port 4000');
});
