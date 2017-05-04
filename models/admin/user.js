
var gmodel = require('../model');

/**
 * 获取用户列表
 * @param  {Function} callback [description]
 * @return {[type]}            [description]
 */
exports.getUserList = function(callback) {
  gmodel.User.findAll().then(function(ret) {
    callback({flag: true, data: ret});
  }).catch(function(err) {
    callback({flag: false, msg: '获取列表失败'});
  });
}

exports.login = function(params,callback) {
  callback();
}
