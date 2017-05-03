/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('e_attachment', {
    aid: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    blogid: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    filename: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    filesize: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    filepath: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    addtime: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    width: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    height: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    mimetype: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    thumfor: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'e_attachment'
  });
};
