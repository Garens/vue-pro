var express = require('express');
var router = express.Router();
var model = require('../models/model.js');


router.get('/', function(req, res, next) {
  console.log(11111111);
  res.send({ title: 'pixi.js' });
});

router.get('/demo1', function(req, res, next) {
  res.render('demo1', { title: 'demo1' });
});



module.exports = router;
