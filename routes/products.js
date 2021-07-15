var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next){
    res.send('product get');
})

router.post('/', function(req, res, next){
    res.json(req);
})

module.exports = router;
