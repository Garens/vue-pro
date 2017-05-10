
var gmodel = require('../model');


//保存文章
exports.saveBlog = function(params, callback) {
  var blog = params.blog;
  if(!blog && typeof(blog) !== 'object') {
    return callback({flag: false, msg: '传入的数据格式错误'});
  }
  blog.top = blog.top ? 'y' : 'n';
  blog.sortop = blog.sortop ? 'y' : 'n';
  blog.allow_remark = blog.allow_remark ? 'y' : 'n';
  blog.date = (Date.parse(new Date()))/1000;
  blog.author = 1;
  blog.type = 'blog';
  gmodel.Article.upsert(blog).then(function(ret) {
    callback({flag: true, data: ret});
  }).catch(function(err) {
    console.log('error1:' + err);
    callback({flag: false, msg: '数据库操作失败', err: err});
  })
}

//获取文章列表
exports.getArticleList = function(callback) {
  gmodel.Article.findAll({
    include:[
      {model: gmodel.Sort, as: 'sort'},
      {model: gmodel.User, as: 'user'},
      {model: gmodel.Comm, as: 'comm'}
    ],
    order: [['gid', 'DESC']]
  }).then(function(ret) {
    callback({flag: true, data: ret});
  }).catch(function(err) {
    console.log('ERROR2:' + err);
    callback({flag: false, msg: '获取列表失败', err: err});
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
    callback({flag: false, msg: '数据库操作失败', err: err});
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
