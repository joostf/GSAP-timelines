const { v4: uuidv4 } = require('uuid')
const mail = require('../modules/mail')
const express = require('express')
const assert = require('assert')
const router = express.Router()
const MongoClient = require('mongodb').MongoClient
const url = process.env.MONGO_URI
const dbName = 'users'

router.get('/users', async function(req, res) {
  if (req.session.loggedin) {
    MongoClient.connect(url, function(err, client) {
      assert.strictEqual(null, err)
      const db = client.db(dbName)
      db.collection('user').find({}).toArray(function(err, docs) {
        assert.strictEqual(err, null) 
        res.json(docs)
        console.log(JSON.parse(docs).explanation);
      })
      client.close()
    })
  } else {
    res.redirect('/login')
  }
})


router.post('/newuser', async function(req, res) {

  if (req.session.loggedin) {    
    const emails = req.body.emails
    const userData = []
  
    for (email of emails) {
      if (email.length > 3) {
        const newDocument = {
          userid: uuidv4(),
          email: email
        }
        userData.push(newDocument)
      }   
    }
  
    MongoClient.connect(url, function(err, client) {
      assert.strictEqual(null, err)
      const db = client.db(dbName)
      db.collection('user').insertMany(userData).then(function(result) {
        mail.sendEmail(userData)
      })
      client.close()
    })
    res.redirect('/admin')
  } else {
    res.redirect('/login')
  }
})

module.exports = router
