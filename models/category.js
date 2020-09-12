const Sequelize = require("sequelize");
const sequelize = require("../config/sequelize");

const Category = sequelize.define(
  "category",
  {
    //without defining the id because it's predefined
    name: {
      type: Sequelize.STRING,
      //unique: true,
      //allowNull: false,
    },
  },
  { freezeTableName: true, tableName: "categories" }
);

var Plan = require("./plan");
Category.hasMany(Plan, { as: "Plans" });

sequelize
  .sync({
    force: true,
    //logging: console.log
  })
  .then(function () {
    console.log("DB : creating categories table");
    Category.create({
      name: "Eat & Drink",
    });
    Category.create({
      name: "Hotels",
    });
    Category.create({
      name: "Shops",
    });
    Category.create({
      name: "Nightlife",
    });
    Category.create({
      name: "Events",
    });
    Category.create({
      name: "Fitness",
    });
  })
  .catch(function (error) {
    console.log(error);
  });

module.exports = Category;
