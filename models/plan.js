const Sequelize = require("sequelize");
const sequelize = require("../config/sequelize");

const Plan = sequelize.define(
  "plan",
  {
    //without defining the id because it's predefined
    name: {
      type: Sequelize.STRING,
      //unique: true,
      //allowNull: false,
    },
    description: {
      type: Sequelize.TEXT,
      //allowNull: false,
      //unique: false,
    },
    address: {
      type: Sequelize.STRING,
      //allowNull: false,
      //unique: true,
    },
    phone_number: {
      type: Sequelize.STRING,
      //allowNull: true,
      //unique: true,
    },
  },
  {
    freezeTableName: true,
    tableName: "plans",
  }
);

var Image = require("./image");
Plan.hasMany(Image, { as: "Gallery" });

sequelize
  .sync({
    force: true,
    //logging: console.log
  })
  .then(function () {
    console.log("DB : creating plans table");
    /*Plan.create({
        ...
  })*/
  })
  .catch(function (error) {
    console.log(error);
  });

module.exports = Plan;
