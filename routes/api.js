const { v4: uuidv4 } = require('uuid');
const nodemailer = require("nodemailer");

const express = require('express');
const router = express.Router();

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert')
const url = process.env.MONGO_URI
const dbName = 'users'
const client = new MongoClient(url)

router.get('/users', async function(req, res) {
  const emails = req.body.emails  

  client.connect(function(err) {
    assert.equal(null, err)
    console.log('connected succesfully')
        
    const db = client.db(dbName)
      getAllUsers(db, function(docs) {
        res.json(docs)
        client.close()
      })
  })

});

router.post('/newusers', async function(req, res) {
  const emails = req.body.emails  

  client.connect(function(err) {
    assert.equal(null, err)
    console.log('connected succesfully')
        
    const db = client.db(dbName)
      getAllUsers(db, function(docs) {
        client.close()
      })
  })

  res.redirect('/admin')
});

const getAllUsers = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('user');
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)
    callback(docs);
  });
}

// function sendMail(id, email) {
//   let transport = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: process.env.EMAIL_USERNAME,
//         pass: process.env.EMAIL_PASSWORD
//     }
// });

// const message = {
//     from: 'info@minor-webdev.com', // Sender address
//     to: email,         // List of recipients (kunnen er meer zijn)
//     subject: 'Intakeformulier | HvA minor webdev', // Subject line
//     html: `<h1>Intakeformulier</h1><p>${id}</p>` // Bericht
// };

// transport.sendMail(message, function(err, info) {
//     if (err) {
//       console.log(err)
//     } else {
//       console.log(info);
//     }
// });
// }

module.exports = router;
