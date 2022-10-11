const { Model } = require("sequelize");

const Sequelize =require("sequelize");
const sequelize= require("../util/database");
//const ENUM= require("ENUM");
const movies = sequelize.define("movies",{
    Mid :{
        type: Sequelize.INTEGER,
        autoincrement:true,
        primaryKey:true,
        
    },
    Title:{
        type: Sequelize.STRING,
        allowNULL:false,
    },

    Type:{
        type: Sequelize.ENUM('movie','Webserise','TVshow'),
        default:'movie',    
        allowNULL:false,
    },

   
});
module.exports=movies;