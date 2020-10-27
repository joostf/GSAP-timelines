const express = require('express')
const router = express.Router()

router.get('/', function(req, res) {
  if (req.session.loggedin) {
    res.render('admin')
  } else {
    res.redirect('/login')
  }
})

module.exports = router
