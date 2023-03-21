const express = require('express');            
//set homepage 
const Homepage = express();

const url = require('url');
//
const path = require('path');
//set view engine
Homepage.set("view engine","ejs");

Homepage.set("views",path.join(__dirname,"../templates"));
//set default stactic settings
console.log(path.join(__dirname,"../templates"))
//body-parser
const bodyParser = require("body-parser");
// use bodyParser
Homepage.use(bodyParser.json());
// encode url data
Homepage.use(bodyParser.urlencoded({extended:true}));
//load home page 
const controller = require('../Controllers/Homecontroller');
//adding route

Homepage.get("/",controller.homepage);
//adding route
Homepage.post("/",controller.Allfetchdata);
//exporting route
module.exports = Homepage;
