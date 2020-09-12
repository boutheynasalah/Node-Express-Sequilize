var Sequelize = require("sequelize");
module.exports = (sequelize, type) => {
  return sequelize.define(
    "image",
    {
      idimage: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      url: { type: Sequelize.STRING(255), allowNull: true },
    },

    { tableName: "image", timestamps: false, underscored: true }
  );
};
