const express=require("express");
const sequelize=require("./util/database");
const movies=require("./model/movies");
const movie_year=require("./model/movie_year");
const Actors=require("./model/Actors");
const Director=require("./model/Director");
const Production=require("./model/Production");
const Writer=require("./model/Writer");
const Genre=require("./model/Genre");
const Awords=require("./model/Awords");
const Rating=require("./model/Rating")

const app= express();
const bodyParser = require('body-parser');
//app.use(bodyParser.josn())
app.use(bodyParser.urlencoded({extedded:true}))

// sequelize
//     .sync()
//     //.sync()
//     .then((result)=>{ 
//         return movies.create({Mid:1,Title:"Jaiho",Type:"movie"})
//         console.log(result);
//     })


 app.post('/movie', function (request, response) {
    return  movies.create({
        Mid: request.body.Mid,
        Title: request.body.Title,
        Type: request.body.Type 
    }).then(function (movies) {
        if (movies) {
            response.send(movies);
        } else {
            response.status(400).send('Error in insert new record');
        }
    });
});

app.listen(3000, function () {
    console.log('Express server is listening on port 3000');
});


 