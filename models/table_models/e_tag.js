/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('e_tag', {
    tid: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tagname: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    gid: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'e_tag'
  });
};
