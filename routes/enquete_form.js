const express = require('express')
const router = express.Router()

router.get('/:id', function(req, res) {
    const id = req.params.id
    res.render('enquete_form', {
        title: 'Minor web dev enquete',
        id: id
    })
})

module.exports = router
