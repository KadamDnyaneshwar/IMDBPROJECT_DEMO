const { Model } = require("sequelize");
const Sequelize =require("sequelize");
const sequelize= require("../util/database");
const Writer = sequelize.define("Writer",{
    Wid :{
        type: Sequelize.INTEGER,
        autoincrement:true,
        allowNULL:false,
        primaryKey:true,    
    },
  Writer_Name:{
        type: Sequelize.STRING,
        allowNULL:false,
    },

   
});

Writer.associate =(models) =>{
    Writer.belongsToMany(models.movies,{
     through:'movieswriterrelation',
    as: 'movies',
    foregnkey: 'Mid'});
    };
    
module.exports=Writer;