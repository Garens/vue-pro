
var gmodel = require('../model');


//获取文章列表
exports.getArticleList = function(callback) {
  gmodel.Article.findAll({
    include:[
      {model: gmodel.Blog, as: 'blog'}
    ],
    order: [['sid', 'ASC']]
  }).then(function(ret) {
    callback({flag: true, data: ret});
  }).catch(function(err) {
    callback({flag: false, msg: '获取列表失败'});
  });
}

//删除分类
exports.delSort = function(params, callback) {
  if(!params.sid) {
    return callback({flag: false, msg: '传入的数据格式错误'});
  }

  gmodel.Sort.destroy({
    where: {
      sid : params.sid
    }
  }).then(function(ret) {
    callback({flag: true, msg: '删除成功'});
  }).catch(function(err) {
    callback({flag: false, msg: '删除失败'});
  })
}

//添加、修改分类
exports.upsertSort = function(params, callback) {
  if(!params && typeof(params) !== 'object') {
    return callback({flag: false, msg: '传入的数据格式错误'});
  }
  gmodel.Sort.upsert(params).then(function(ret) {
    callback({flag: true, data: ret});
  }).catch(function(err) {
    callback({flag: false, msg: '添加分类失败'});
  });
}

//获取文章分类列表
exports.getSortList = function(callback) {
  gmodel.Sort.findAll({
    // include:[
    //   {model: gmodel.Blog, as: 'blog'}
    // ],
    order: [['sid', 'ASC']]
  }).then(function(ret) {
    callback({flag: true, data: ret});
  }).catch(function(err) {
    callback({flag: false, msg: '获取列表失败'});
  });
}
