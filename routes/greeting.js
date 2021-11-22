var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/hello', function (req, res, next) {
    res.json('Greetings from API!');
});

module.exports = router;