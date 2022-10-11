const { Model } = require("sequelize");

const Sequelize =require("sequelize");
const sequelize= require("../util/database");
const movies = require("./movies");
const movies_year = sequelize.define("movies_year",{
    Mid :{
        type: Sequelize.INTEGER,
             allowNULL:false,
         
    },
    year:{
        type: Sequelize.STRING,
        allowNULL:false,
    },
     
    })

    // movies.associate = model => {
    //     movies.hasMany(model.movies_year, {
    //       foreignKey: 'moviemid'
    //     });
    //   }
      

    //movies.hasOne(movies_year);
    
 
  //movies.hasOne(movies_year, {foreignKey: 'Mid'});

module.exports=movies_year;