const express = require('express');
const router = express.Router();
const nodemailer = require("nodemailer");
require('dotenv').config()

router.get('/', function(req, res, next) {
    let transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
           user: process.env.EMAIL_USERNAME,
           pass: process.env.EMAIL_PASSWORD
        }
    });

    const message = {
        from: 'info@minor-webdev.com', // Sender address
        to: 'kylebot07@gmail.com',         // List of recipients (kunnen er meer zijn)
        subject: 'Intakeformulier | HvA minor webdev', // Subject line
        html: `<h1>Intakeformulier</h1><p>?code?</p>` // Bericht
    };

    transport.sendMail(message, function(err, info) {
        if (err) {
          console.log(err)
        } else {
          console.log(info);
        }
    });

    res.redirect('/')
  });

module.exports = router;
