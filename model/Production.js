const { Model } = require("sequelize");
const Sequelize =require("sequelize");
const sequelize= require("../util/database");
const Production = sequelize.define("Production",{
    Pid :{
        type: Sequelize.INTEGER,
        autoincrement:true,
        allowNULL:false,
        primaryKey:true,    
    },
    Production_Name:{
        type: Sequelize.STRING,
        allowNULL:false,
    },
   
   
});

Production.associate =(model) =>{
    Production.belongsToMany(model.movies,{
     through:'moviesproductionrelation',
    as: 'movies',
    foregnkey: 'Mid'});
    };
    
module.exports=Production;