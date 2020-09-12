var Sequelize = require('sequelize');
module.exports=(sequelize,type)=>{
    return sequelize.define('categorie',{
        idcatg:{type:Sequelize.INTEGER , autoIncrement:true,primaryKey:true},
        nomcatg:{type:Sequelize.STRING(255), allowNull: true, },

    },
    
    {tableName:'categorie',timestamps:false,underscored:true}
    
    );
}