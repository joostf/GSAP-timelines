const express = require('express')
const router = express.Router()

const MongoClient = require('mongodb').MongoClient
const url = process.env.MONGO_URI
const dbName = 'users'

const sanitize = require('mongo-sanitize');


router.get('/form', function(req, res) {
  const id = req.query.id
  MongoClient.connect(url, async function(err, client) {
    const db = client.db(dbName)
    const data = await db.collection('user').findOne({userid: id})
    res.render('intake-form', {
      title: 'Minor Web Dev Intake',
      id: id,
      data: data
    })
  })
})

router.post('/form', async function(req,res) {
  const id = req.body.id
  MongoClient.connect(url, async function(err, client) {
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
    client.close()
    res.redirect(`/complete/?id=${id}`)
  })
})

router.get('/challenge', function(req, res) {
  const id = req.query.id
  MongoClient.connect(url, async function(err, client) {
    
    const db = client.db(dbName)
    let data = await db.collection('user').findOne({userid: id})
    let dataToggle;
    data.codechallenge === undefined ? dataToggle = false : dataToggle = true
    res.render('challenge', {
      title: 'Minor Web Dev Intake',
      id: id,
      data: data,
      hasData: dataToggle
    })
  })
})

router.post('/challenge', function(req, res) {
  const id = req.body.id
  MongoClient.connect(url, async function(err, client) {
    const db = client.db(dbName)
    await db.collection('user').updateOne({userid: id}, {$set: {
      codechallenge: {
        html: sanitize(req.body.html),
        css: sanitize(req.body.css),
        javascript: sanitize(req.body.js)
      }
    }}, {upsert: true})
    client.close()
    res.redirect(`/complete/?id=${id}`)
  })
})

module.exports = router
