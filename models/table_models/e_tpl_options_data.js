/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('e_tpl_options_data', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    template: {
      type: DataTypes.CHAR(64),
      allowNull: false
    },
    name: {
      type: DataTypes.CHAR(64),
      allowNull: false
    },
    depend: {
      type: DataTypes.CHAR(64),
      allowNull: false,
      defaultValue: ''
    },
    data: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'e_tpl_options_data'
  });
};
