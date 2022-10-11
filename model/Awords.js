const { Model } = require("sequelize");
const Sequelize =require("sequelize");
const sequelize= require("../util/database");
const Awords = sequelize.define("Awords",{
    AWid :{
        type: Sequelize.INTEGER,
        autoincrement:true,
        allowNULL:false,
        primaryKey:true,    
    },
  Awords_Name:{
        type: Sequelize.STRING,
        allowNULL:false,
    },
   
   
});

Awords.associate =(model) =>{
  Awords.belongsToMany(model.movies,{
     through:'moviesproductionrelation',
    as: 'movies',
    foregnkey: 'Mid'});
    };
    
module.exports=Awords;