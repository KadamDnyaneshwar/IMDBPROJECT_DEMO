const { Model } = require("sequelize");
const Sequelize = require("sequelize");
const sequelize= new Sequelize('idbmDB','root','infeon@1432',
    {dialect:'mysql',
    host:'localhost',
    });
console.log("datbase conecton sucessfully")

module.exports=sequelize;