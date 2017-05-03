/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('e_options', {
    option_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    option_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    option_value: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'e_options'
  });
};
