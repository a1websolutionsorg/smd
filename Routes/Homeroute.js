const express = require('express');            
//set homepage 
const Homepage = express();
//
const path = require('path');
//set view engine
Homepage.set("view engine","ejs");
//set path 
Homepage.set("views","../views");
//set default stactic settings
console.log(path.join(__dirname,"../views"))
//body-parser
const bodyParser = require("body-parser");
// use bodyParser
Homepage.use(bodyParser.json());
// encode url data
Homepage.use(bodyParser.urlencoded({extended:true}));
//load home page 
const controller = require('../Controllers/Homecontroller');
//adding route
Homepage.get("/",controller.Home);
//adding route
//Homepage.post("/",controller.Allfetchdata);
//exporting route
module.exports = Homepage;
