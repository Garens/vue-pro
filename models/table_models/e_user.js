/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('e_user', {
    uid: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    nickname: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    ischeck: {
      type: DataTypes.ENUM('n','y'),
      allowNull: false,
      defaultValue: 'n'
    },
    photo: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'e_user'
  });
};
