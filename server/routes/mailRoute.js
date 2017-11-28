var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');

module.exports = app => {
  app.use(bodyParser.urlencoded());
  app.post('/admin/home', function(req, res, next) {
    // console.log(req.body.email);
    // console.log(req.body.pass);
    // console.log(req.body.student);
    // app.set('username', req.body.student);
    console.log(app.get('mail'));
    var smtpTransport = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      auth: {
        user: req.body.email,
        pass: req.body.pass
      }
    });

    var mailOptions = {
      to: req.body.student,
      subject: 'Interview link',
      text: 'http://localhost:4000/auth/google'
    };
    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function(error, response) {
      if (error) {
        console.log(error);
        res.end('error');
      } else {
        console.log('Message sent: ' + mailOptions.text);
        res.end('sent');
      }
    });
  });
};
