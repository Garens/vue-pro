/**
 * create at 2017年4月6日15:43:38
 * @author：garens
 * @type {[type]}
 */

var Sequelize = require('sequelize');
var sequelize = require('./conn');


var user = require('./table_models/e_user');
var sort = require('./table_models/e_sort');
var article = require('./table_models/e_blog');
var comm = require('./table_models/e_comment');


var Sort = sort(sequelize,Sequelize);
var Article = article(sequelize,Sequelize);
var Comm = comm(sequelize,Sequelize);

Article.belongsTo(Sort, {foreignKey: 'sortid', as: 'sort'});
Article.hasMany(Comm, {foreignKey: 'gid', targetKey: 'gid', as: 'comm'});
Sort.hasMany(Article, {foreignKey: 'sortid', targetKey: 'sortid', as: 'article'});


exports.User = user(sequelize,Sequelize);
exports.Article = Article;
exports.Sort = Sort;
