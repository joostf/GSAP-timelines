const express = require("express")
const app = express()
const router = express.Router()
const MongoClient = require('mongodb').MongoClient;
const uri = process.env.MONGO_URI
const mongoDbClient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })


router.get('/', async (req, res) => {
  res.render('login')
})

router.post('/', async (req, res) => {
  console.log(req.body)
    const userData = await login(req.body)
    const password = req.body.password === userData.password ? true : false
    if(password === true) {
        console.log('correct')
        res.redirect(`/admin/${userData.username}`)
    } else {
        console.log('incorrect')
        res.redirect('/login')
    }
})

async function login(data) {
    try {
        await mongoDbClient.connect()
        const db = mongoDbClient.db('adminUsers')
        let userData = await db.collection('user').findOne({username: data.username})
        return userData
      }
      catch(e) {
        console.error(e)
      }
}

module.exports = router;
