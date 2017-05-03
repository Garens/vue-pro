/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('e_blog', {
    gid: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    date: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    excerpt: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    alias: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    author: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '1'
    },
    sortid: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '-1'
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'blog'
    },
    views: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    comnum: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    attnum: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    top: {
      type: DataTypes.ENUM('n','y'),
      allowNull: false,
      defaultValue: 'n'
    },
    sortop: {
      type: DataTypes.ENUM('n','y'),
      allowNull: false,
      defaultValue: 'n'
    },
    hide: {
      type: DataTypes.ENUM('n','y'),
      allowNull: false,
      defaultValue: 'n'
    },
    checked: {
      type: DataTypes.ENUM('n','y'),
      allowNull: false,
      defaultValue: 'y'
    },
    allow_remark: {
      type: DataTypes.ENUM('n','y'),
      allowNull: false,
      defaultValue: 'y'
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    template: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    zsshare: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'e_blog'
  });
};
