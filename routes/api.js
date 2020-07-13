const { v4: uuidv4 } = require('uuid');
const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const uri = process.env.MONGO_URI
const mongoDbClient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })

router.post('/newuser', async function(req, res) {
    const email = req.body.email    
    const id = uuidv4()
    // check for mailaddress in database. if it already exists, redirect
    const emailAlreadyUsed = await checkIfEmailIsUsed(email)
    console.log(emailAlreadyUsed)
    
    if (emailAlreadyUsed) {
      res.render('error', { message: 'emailadres is al gebruikt' })
    }
    else {
      await createNewUserEntry(id, email)
      res.redirect('/admin')
    }
    
    // else push new database entry with id and email.

    
    async function checkIfEmailIsUsed(email) {
      try {
          await mongoDbClient.connect()
          const db = mongoDbClient.db('users')
          let userData = await db.collection('user').findOne({email: email})
          return userData
        }
        catch(e) {
          console.error(e)
        }
    }

    async function createNewUserEntry(id, email) {
      try {
        await mongoDbClient.connect()
        const db = mongoDbClient.db('users')
        await db.collection('user').insertOne({
          "userid" : id,
          "email": email
        })
      }
      catch(e) {
        console.error(e)
      }
    }

  });

module.exports = router;
