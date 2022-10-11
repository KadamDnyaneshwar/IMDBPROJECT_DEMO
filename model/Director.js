const { Model } = require("sequelize");
const Sequelize =require("sequelize");
const sequelize= require("../util/database");
const Director = sequelize.define("Director",{
    Did :{
        type: Sequelize.INTEGER,
        autoincrement:true,
        allowNULL:false,
        primaryKey:true,    
    },
    Director_Firstname:{
        type: Sequelize.STRING,
        allowNULL:false,
    },
    Director_Lastname:{
        type: Sequelize.STRING,
        allowNULL:false,
    },
    DateOfBirth:{
        type: Sequelize.STRING,
        allowNULL:false,
    },
    Palce:{
        type: Sequelize.STRING,
        allowNULL:false,
    },
   
});

Director.associate =(models) =>{
    Director.belongsToMany(models.movies,{
     through:'moviesactorsrelation',
    as: 'movies',
    foregnkey: 'Did'});
    };
    
module.exports=Director;