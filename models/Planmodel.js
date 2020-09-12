var Sequelize = require("sequelize");
module.exports = (sequelize, type) => {
  return sequelize.define(
    "plan",
    {
      idplan: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nom: { type: Sequelize.STRING(255), allowNull: true },
      description: {
        type: Sequelize.STRING(255),
        allowNull: true,
        unique: true,
      },
      adresse: { type: Sequelize.STRING(255), allowNull: true },
      telephone: { type: Sequelize.INTEGER, allowNull: true },
    },
    { tableName: "plan", timestamps: false, underscored: true }
  );
};
