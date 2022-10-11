const { Model } = require("sequelize");
const Sequelize =require("sequelize");
const sequelize= require("../util/database");
const Genre= sequelize.define("Genre",{
    Gid :{
        type: Sequelize.INTEGER,
        autoincrement:true,
        allowNULL:false,
        primaryKey:true,    
    },
    Genre_Type:{
        type: Sequelize.STRING,
        allowNULL:false,
    },
//Genre types as like action ,advanture, funny
   
});

Genre.associate =(model) =>{
    Genre.belongsToMany(model.movies,{
     through:'moviesgenrerelation',
    as: 'movies',
    foregnkey: 'Mid'});
    };
    
module.exports=Genre;