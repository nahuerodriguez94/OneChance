const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("onechance", "root", "1234", {
  host: "localhost",
  port: "3306",
  dialect: "mysql",
  timezone: "-03:00",
});

module.exports = { sequelize };
