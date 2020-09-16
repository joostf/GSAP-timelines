const { v4: uuidv4 } = require('uuid');
const mail = require('../modules/mail')

const express = require('express');
const router = express.Router();

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert')
const url = process.env.MONGO_URI
const dbName = 'users'

router.get('/', function(req, res) {
    let hasId = req.query.id ? true : false
    res.render('index', { title: 'Resultaten', id: req.query.id, hasId: hasId })
})

router.post('/create_user', async function(req, res) {
    const email = req.body.email
    const newDocument = {
        userid: uuidv4(),
        email: email
    }

    MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    const db = client.db(dbName)
    db.collection('user').insertOne(newDocument).then(function(result) {  
    })
    client.close();
    })

    res.redirect(`/intake/challenge/?id=${newDocument.userid}`)
  });

module.exports = router
