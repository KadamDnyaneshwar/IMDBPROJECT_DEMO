const { Model } = require("sequelize");
const Sequelize =require("sequelize");
const sequelize= require("../util/database");
const Rating= sequelize.define("Rating",{
    Rid :{
        type: Sequelize.INTEGER,
        autoincrement:true,
        allowNULL:false,
        primaryKey:true,    
    },
    Rating:{
        type: Sequelize.FLOAT,
        allowNULL:false,
    },
    Poster:{
        type:Sequelize.STRING,
        allowNULL:false
    },
    website:{
        type:Sequelize.STRING,
        allowNULL:false,
    },
    Boxoffice:{
        type:Sequelize.STRING,
        allowNULL:false,
    }

   
});
Rating.associate =(model) =>{
    Rating.belongsToMany(model.movies,{
     through:'moviesratingrelation',
    as: 'movies',
    foregnkey: 'Rid'});
    };
    
module.exports=Rating;

