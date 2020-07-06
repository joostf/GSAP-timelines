const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.json({ api: 'You have made your first api call yay' })
  });

module.exports = router;
