var Sequelize = require('sequelize');
module.exports = (sequelize, type) => {
    return sequelize.define('notification', {
      idnotif: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
      contenu: {type: Sequelize.TEXT,allowNull: true,  }
  },
      {tableName: 'notification', timestamps: false, underscored: true}
);
}