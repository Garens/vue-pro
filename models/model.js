/**
 * create at 2017年4月6日15:43:38
 * @author：garens
 * @type {[type]}
 */

var Sequelize = require('sequelize');
var sequelize = require('./conn');


var user = require('./table_models/e_user');


exports.User = user(sequelize,Sequelize);
