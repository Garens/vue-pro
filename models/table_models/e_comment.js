/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('e_comment', {
    cid: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    gid: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    pid: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    date: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    poster: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    mail: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    ip: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    hide: {
      type: DataTypes.ENUM('n','y'),
      allowNull: false,
      defaultValue: 'n'
    }
  }, {
    tableName: 'e_comment'
  });
};
