// first define the model
const { Model, Datatypes, DataTypes } = require("sequelize");
const bcrypt = require(bcrypt);
const sequelize = require("../config/connection");
class User extends Model {}
User.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
  },

  {
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }
);

module.exports = User;
