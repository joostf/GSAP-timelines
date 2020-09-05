const express = require('express')
const router = express.Router()

const MongoClient = require('mongodb').MongoClient;
const url = process.env.MONGO_URI
const dbName = 'users'


router.get('/', function(req, res) {
    const id = req.query.id
    res.render('enquete_form', {
        title: 'Minor web dev enquete',
        id: id
    })
})

router.post('/', async function(req,res) {
    const id = req.params.id
    console.log(req.body)
    MongoClient.connect(url, async function(err, client) {
        console.log('connected succesfully')
    
        const db = client.db(dbName)
        const user = await db.collection('user').findOne({userid: id})
        client.close()
    })
})

module.exports = router
