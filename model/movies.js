const { Model } = require("sequelize");

const Sequelize =require("sequelize");
const sequelize= require("../util/database");
//const ENUM= require("ENUM");
const movies = sequelize.define("movies",{
    id :{
        type: Sequelize.INTEGER,
        autoincrement:true,
        allowNULL:false,
        primaryKey:true,
        
    },
    Title:{
        type: Sequelize.STRING,
        allowNULL:false,
    },

Type:{
    type: Sequelize.ENUM('movie','Webserise'),
    default:'movie',    
    allowNULL:false,
},

   
});
module.exports=movies;