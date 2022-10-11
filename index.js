const sequelize=require("./util/database");
const movies=require("./model/movies");
const movie_year=require("./model/movie_year");
const Actors=require("./model/Actors");
const Director=require("./model/Director");
const Production=require("./model/Production");
const Writer=require("./model/Writer");
const Genre=require("./model/Genre");
const Awords=require("./model/Awords")
const express=require("express");
const app= express();

sequelize.sync({alter:true}).then(result=>{
        console.log(result);
    }).catch((err)=>{
        console.log(err);


    });


 