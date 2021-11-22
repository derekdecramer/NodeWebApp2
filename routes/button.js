var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/click', function (req, res, next) {
    res.json('You clicked me!');
});

module.exports = router;