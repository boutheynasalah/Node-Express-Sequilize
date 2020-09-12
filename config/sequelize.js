const Sequelize = require("sequelize");
const sequelize = new Sequelize("RecommendationPlan", "root", "", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

module.exports = sequelize;
