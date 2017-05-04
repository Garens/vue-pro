var express = require('express');
var router = express.Router();
var model = require('../models/model.js');
var User = require('../models/admin/user');


router.get('/', function(req, res, next) {
  console.log(11111111);
  res.send({ title: 'pixi.js' });
});

router.get('/getUserList', function(req, res) {
  User.getUserList(function(ret) {
    res.send(ret);
  })
})

router.get('/login', function(req, res, next) {
});

router.post('/login', function(req, res, next) {
  var params = req.body;
  User.login(params,function(ret) {
    res.send({flag: true, msg: '登录成功'});
  })
});



module.exports = router;
