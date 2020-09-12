const Sequelize = require("sequelize");
const sequelize = require("../config/sequelize");

const Image = sequelize.define(
  "image",
  {
    //without defining the id because it's predefined
    url: {
      type: Sequelize.STRING,
      //unique: false,
      //allowNull: true,
    },
  },
  { freezeTableName: true, tableName: "images" }
);

sequelize
  .sync({
    force: true,
    //logging: console.log
  })
  .then(function () {
    console.log("DB : creating images table");
    /*Image.create({
        ...
  })*/
  })
  .catch(function (error) {
    console.log(error);
  });

module.exports = Image;
