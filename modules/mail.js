const nodemailer = require("nodemailer");
const path = require('path')
require('dotenv').config()

function sendEmail(users) {
    users.map(user => (
        mailEmail(user.email, user.userid)
    ))
};

function mailEmail(email, id) {
    let transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
           user: process.env.EMAIL_USERNAME,
           pass: process.env.EMAIL_PASSWORD
        }
    });
    const imagePath = path.join(__dirname, '/../public/images/logo_white.png')
    const imagePathLeft = path.join(__dirname, '/../public/images/logo_purple_left.png')
    const imagePathRight = path.join(__dirname, '/../public/images/logo_purple_right.png')
    const message = { 
        from: 'info@minor-webdev.com', // Sender address
        to: email,         // List of recipients (kunnen er meer zijn)
        subject: 'Intakeformulier | HvA minor webdev', // Subject line
        html: `<table cellpadding="0" cellspacing="0" width="100%" bgcolor="#ffffff" style="font-family: Arial, Helvetica, sans-serif;">
        <tr>
            <td width="10%">
                <!-- ICON LEFT -->
                <table cellpadding="0" cellspacing="0" width="100%;" align="left">
                    <tr>
                        <td>
                        <img width="100%" src="cid:logoLeft" alt="">
                        </td>
                    </tr>
                </table>
                <!-- // ICON LEFT -->
            </td>
            <td width="80%">
                <table cellpadding="0" cellspacing="0" width="600px" align="center">
                    <tr>
                        <td>
                            <!-- HEADER -->
                            <table cellpadding="0" cellspacing="0" width="100%" bgcolor="#4e54c8" style="border-radius: 8px;">
                                <tr>
                                    <td style="text-align: center;padding-top:5px;padding-bottom:5px;">
                                        <h1 style="margin:0;color: #fff;font-family: Arial, Helvetica, sans-serif;">Minor Web-Dev</h1>
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
                                                <td style="text-align: center;padding-top:30px;padding-bottom: 30px;">
                                                    <p style="margin:0;color: #000000;">Je bent uitgenodigd voor een intake voor de Minor Web-Dev. Deze intake is verplicht om mee te doen aan de minor. Klik hieronder op de link om mee te doen, je kan hier ook mee starten en deze later afmaken. De data wordt opgeslagen.</p>
                                                </td>
                                            </tr>
                                        </table>
                                        <table width="100%" cellspacing="0" cellpadding="0" style="padding-bottom:30px;">
                                            <tr>
                                                <td>
                                                    <table align="center" cellspacing="0" cellpadding="0">
                                                        <tr>
                                                            <td class="button" bgcolor="#4e54c8" style="padding-top:10px;padding-bottom:10px;border-radius: 8px;">
                                                                <a  href="http://localhost:3000/?id=${id}" target="_blank" style="text-decoration: none;color:#fff;padding-left:15px;padding-right:15px;font-weight: bold;font-size:16px;">
                                                                    Ga naar de Intake Tool             
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                          </table>
                                          <!-- BORDER -->
                                          <table width="100%" cellspacing="0" cellpadding="0" bgcolor="#e6e6e6">
                                            <tr>
                                                <td style="height:1px;"></td>
                                            </tr>
                                          </table>
                                          <!-- // BORDER -->
                                          <table width="100%" cellspacing="0" cellpadding="0" style="padding-top:20px;">
                                              <tr>
                                                  <td width="49%">
                                                      <img width="100%" src="https://everythingweb.org/images/who-you-gonna-call.jpg" alt="">
                                                  </td>
                                                  <td width="3%" style="height: 5px;"></td>
                                                  <td width="48%" valign="top">
                                                    <p style="margin:0;color: #000000;">Deze minor leert je interactieve toepassingen maken met de webtechnologieën: HTML, CSS en JavaScript. In verschillende vakken en projecten leer je over browsers, het ‘real time web’, internet of things, performance, rapid prototyping, usability, documenteren, versiebeheer, debuggen, testen, responsive, reactive, micro interacties, API’s en … en …</p>
                                                  </td>
                                              </tr>
                                          </table>
                                          <table width="100%" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td width="48%" style="padding-top:15px" valign="top">
                                                    <p style="margin:0;color: #000000;">De minor wordt aangeboden door de opleiding CMD van de Hogeschool van Amsterdam. CMD Amsterdam is een ontwerpopleiding digital design met drie focuspunten: interaction design, visual design en front-end development. De minor sluit aan bij het profiel Front-end developer.</p>
                                                  </td>
                                                <td width="3%" style="height: 5px;"></td>
                                                <td width="49%" style="padding-top:15px">
                                                    <img width="100%" src="https://everythingweb.org/images/theme-parks-for-the-web.jpg" alt="">
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
            </td>
            <td width="10%" valign="top">
                <!-- ICON RIGHT -->
                <table cellpadding="0" cellspacing="0" width="100%" align="right">
                    <tr>
                        <td style="padding-top:20px;">
                            <img width="100%;" src="cid:logoRight" alt="">
                        </td>
                    </tr>
               </table>
               <!-- // ICON RIGHT -->
            </td>
        </tr>
    </table>`, // Bericht
    attachments: [
  {
    filename: 'logo_purple_left.png',
    path: imagePathLeft,
    cid: 'logoLeft' //same cid value as in the html img src
},
{
    filename: 'logo_purple_right.png',
    path: imagePathRight,
    cid: 'logoRight' //same cid value as in the html img src
}
]
    };

    transport.sendMail(message, function(err, info) {
        if (err) {
          console.log(err)
        } else {
          console.log(info);
        }
    });
}

module.exports = {sendEmail}