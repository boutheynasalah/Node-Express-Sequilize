var Sequelize = require('sequelize');
module.exports = (sequelize, type) => {
    return sequelize.define('user', {
      iduser: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
    email: {type: Sequelize.STRING(255), allowNull: true,  unique: true},
    password: {type: Sequelize.STRING(255), allowNull: true,  },
    role: {type: Sequelize.STRING(255), allowNull: true,  },
    nom: {type: Sequelize.STRING(255),  allowNull: true,  },
    prenom: {type: Sequelize.STRING(255),  allowNull: true,  },
    telephone: {type: Sequelize.INTEGER,  allowNull: true,  },
    sexe: {type: Sequelize.STRING(255), allowNull: true,  },
    adresse: {type: Sequelize.STRING(255), allowNull: true,  },
    ville: {type: Sequelize.STRING(255), allowNull: true,  },
    datenaissance: {type: Sequelize.DATE,  allowNull: true,  },
    photo: {type: Sequelize.STRING(255), allowNull: true,  }
  },
        {tableName: 'user', timestamps: false, underscored: true}
);
}