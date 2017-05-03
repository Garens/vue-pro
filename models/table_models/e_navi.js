/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('e_navi', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    naviname: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    newtab: {
      type: DataTypes.ENUM('n','y'),
      allowNull: false,
      defaultValue: 'n'
    },
    hide: {
      type: DataTypes.ENUM('n','y'),
      allowNull: false,
      defaultValue: 'n'
    },
    taxis: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    pid: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    },
    isdefault: {
      type: DataTypes.ENUM('n','y'),
      allowNull: false,
      defaultValue: 'n'
    },
    type: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: '0'
    },
    type_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'e_navi'
  });
};
