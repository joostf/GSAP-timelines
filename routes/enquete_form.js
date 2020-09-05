const express = require('express')
const router = express.Router()

const MongoClient = require('mongodb').MongoClient;
const url = process.env.MONGO_URI
const dbName = 'users'


router.get('/:id', function(req, res) {
    const id = req.params.id
    res.render('enquete_form', {
        title: 'Minor web dev enquete',
        id: id
    })
})

// router.post('/:id', async function(req,res) {
//     const id = req.params.id
//     MongoClient.connect(url, function(err, client) {
//         console.log('connected succesfully')
    
//         const db = client.db(dbName)
//         const user = await db.collection('user').findOne({hash: hash})
//         client.close()
//     })
// })

module.exports = router
