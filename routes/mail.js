const express = require('express');
const router = express.Router();
const nodemailer = require("nodemailer");
const path = require('path')
require('dotenv').config()

router.get('/', function(req, res, next) {
    let transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
           user: process.env.EMAIL_USERNAME,
           pass: process.env.EMAIL_PASSWORD
        }
    });
    const imagePath = path.join(__dirname, '/../public/images/logo_white.png');
    const message = {
        from: 'info@minor-webdev.com', // Sender address
        to: 'gioggmspam@gmail.com',         // List of recipients (kunnen er meer zijn)
        subject: 'Intakeformulier | HvA minor webdev', // Subject line
        html: `<table cellpadding="0" cellspacing="0" width="100%" bgcolor="#ffffff" style="font-family: Arial, Helvetica, sans-serif;">
        <tr>
            <td>
                <!-- ICON LEFT -->
                <table cellpadding="0" cellspacing="0" width="10%;" align="left">
                     <tr>
                         <td>

                         </td>
                     </tr>
                </table>
                <!-- // ICON LEFT -->
                <table cellpadding="0" cellspacing="0" width="600px" align="center">
                    <tr>
                        <td>
                            <!-- HEADER -->
                            <table cellpadding="0" cellspacing="0" width="100%" bgcolor="#4e54c8" style="border-radius: 8px;">
                                <tr>
                                    <td style="text-align: center;">
                                        <h1 style="color: #fff;font-family: Arial, Helvetica, sans-serif;">Minor Web-Dev</h1>
                                    </td>
                                </tr>
                            </table>
                             <!-- // HEADER -->

                            <!-- BODY -->
                            <table cellpadding="0" cellspacing="0" width="100%">
                                <tr>
                                    <td>
                                        <table width="75%" align="center" cellpadding="0" cellspacing="0">
                                            <tr>
                                                <td style="text-align: center;padding-top:20px;padding-bottom: 10px;">
                                                    <p>Je bent uitgenodigd voor een enquete voor de Minor Web-Dev. Deze enquete is verplicht om mee te doen aan de minor. Klik hieronder op de link om mee te doen, je kan hier ook mee starten en deze later afmaken. De data wordt opgeslagen.</p>
                                                </td>
                                            </tr>
                                        </table>
                                        <table width="100%" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td>
                                                    <table align="center" cellspacing="0" cellpadding="0">
                                                        <tr>
                                                            <td class="button" bgcolor="#4e54c8" style="padding-top:10px;padding-bottom:10px;border-radius: 8px;">
                                                                <a  href="http://localhost:3000/" target="_blank" style="text-decoration: none;color:#fff;padding-left:15px;padding-right:15px;font-weight: bold;font-size:16px;">
                                                                    Start de enquete             
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                          </table>
                                    </td>
                                </tr>
                            </table>
                            <!-- // BODY -->

                        </td>
                    </tr>
                </table>
                <!-- ICON RIGHT -->
                <table cellpadding="0" cellspacing="0" width="10%;" align="right">
                    <tr>
                        <td>
                            <img src="cid:logo" alt="">
                        </td>
                    </tr>
               </table>
               <!-- // ICON RIGHT -->
            </td>
        </tr>
    </table>`, // Bericht
    attachments: [{
      filename: 'logo_white.png',
      path: imagePath,
      cid: 'logo' //same cid value as in the html img src
  }]
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
