var express = require('express');
var router = express.Router();
var model = require('../models/model.js');
var User = require('../models/admin/user');
var Article = require('../models/admin/article');


router.get('/', function(req, res, next) {
  console.log(11111111);
  res.send({ title: 'pixi.js' });
});

//保存文章
router.post('/saveBlog', function(req, res) {
  var params = req.body;
  Article.saveBlog(params, function(ret) {
    res.send(ret);
  })
})

//删除文章
router.post('/delArticle', function(req, res) {
  var params = req.body;
  Article.delArticle(params, function(ret) {
    res.send(ret);
  })
})

//获取文章列表
router.get('/getArticleList', function(req, res) {
  var params = req.query;
  Article.getArticleList(params, function(ret) {
    res.send(ret);
  })
})

//删除分类
router.post('/delSort', function(req, res) {
  var params = req.body;
  Article.delSort(params, function(ret) {
    res.send(ret);
  })
})

//添加、修改文章分类
router.post('/upsertSort', function(req, res) {
  var params = req.body;
  Article.upsertSort(params, function(ret) {
    res.send(ret);
  })
})

//获取文章分类列表
router.get('/getSortList', function(req, res) {
  Article.getSortList(function(ret) {
    res.send(ret);
  })
})

// 获取用户列表
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
