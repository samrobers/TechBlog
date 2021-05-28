const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  Process.env.DB_USER,
  Process.env.DB_PASS,
  {
    host: "localhost",
    dialect: "mysql",
    port: 9000,
  }
);
module.exports = sequelize;
//needs to be brought into the server js to establish connection to db before launching server