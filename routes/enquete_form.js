const express = require('express')
const router = express.Router()

const MongoClient = require('mongodb').MongoClient;
const url = process.env.MONGO_URI
const dbName = 'users'


router.get('/', function(req, res) {
    const id = req.query.id
    console.log(id)
    MongoClient.connect(url, async function(err, client) {
        console.log('connected succesfully')
    
        const db = client.db(dbName)
        const data = await db.collection('user').findOne({userid: id})
        res.render('enquete_form', {
            title: 'Minor web dev enquete',
            id: id,
            data: data
        })
    })
})

router.post('/', async function(req,res) {
    const id = req.body.id
    console.log(req.body)
    MongoClient.connect(url, async function(err, client) {
        console.log('connected succesfully')
    
        const db = client.db(dbName)
        await db.collection('user').updateOne({userid: id}, {$set: {
            student: req.body.student,
            name: req.body.name,
            study: req.body.study,
            motivation: req.body.motivation,
            courses: req.body.courses,
            time: req.body.time,
            spare_time: req.body.spare_time,
            tech: req.body.tech,
            visual: req.body.visual,
            ixd: req.body.ixd,
            orientation: req.body.orientation,
            frontend_1: req.body.frontend_1 ? true : false,
            blok_tech: req.body.blok_tech ? true : false,
            frontend_designers: req.body.frontend_designers ? true : false,
            tech_track: req.body.tech_track ? true : false,
        }}, {upsert: true})
        console.log(await db.collection('user').findOne({userid: id}))
        client.close()
        res.redirect(`/enquete/challenge/?id=${id}`)
    })
})

module.exports = router
