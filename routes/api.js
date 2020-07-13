const { v4: uuidv4 } = require('uuid');
const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const uri = process.env.MONGO_URI
const mongoDbClient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })

router.post('/new-user', function(req, res) {
    const email = req.body.email    
    const id = uuidv4()
    // check for mailaddress in database. if it already exists, redirect
    res.render('error', { message: 'emailadres is al gebruikt' })
    // else push new database entry with id and email.

    res.render('succes')
  });

module.exports = router;
