/**
 * create at 2017年4月6日15:43:38
 * @author：garens
 * @type {[type]}
 */

var Sequelize = require('sequelize');
var sequelize = require('./conn');


var user = require('./table_models/e_user');
var sort = require('./table_models/e_sort');
var blog = require('./table_models/e_blog');


var Sort = sort(sequelize,Sequelize);
var Blog = blog(sequelize,Sequelize);

Blog.belongsTo(Sort, {foreignKey: 'sortid', as: 'sort'});
Sort.hasMany(Blog, {foreignKey: 'sortid', targetKey: 'sortid', as: 'blog'});


exports.User = user(sequelize,Sequelize);
exports.Blog = Blog;
exports.Sort = Sort;
