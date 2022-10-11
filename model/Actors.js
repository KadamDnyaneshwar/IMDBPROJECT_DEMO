const { Model } = require("sequelize");
const Sequelize =require("sequelize");
const sequelize= require("../util/database");
const actors = sequelize.define("actors",{
    Aid :{
        type: Sequelize.INTEGER,
        autoincrement:true,
        allowNULL:false,
        primaryKey:true,    
    },
    Actors_Firstname:{
        type: Sequelize.STRING,
        allowNULL:false,
    },
    Actors_Lastname:{
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

actors.associate =(models) =>{
    actors.belongsToMany(models.movies,{
     through:'moviesactorsrelation',
    as: 'movies',
    foregnkey: 'Aid'});
    };
    
module.exports=actors;