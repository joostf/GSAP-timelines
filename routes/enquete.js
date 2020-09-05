const express = require('express')
const router = express.Router()

router.get('/', function(req, res) {
    res.render('index', { title: 'Resultaten' })
})

router.get('/challenge', function(req, res) {
    res.render('challenge', { title: 'Resultaten' })
})

module.exports = router
