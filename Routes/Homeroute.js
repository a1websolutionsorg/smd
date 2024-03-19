const express = require('express');
//set homepage 
const Homepage = express();
//set view engine
Homepage.set("view engine","ejs");
//set engines
Homepage.set('views','./templates');
//set default stactic settings
const path = require('path');
//body-parser
const bodyParser = require("body-parser");
// use bodyParser
Homepage.use(bodyParser.json());
// encode url data
Homepage.use(bodyParser.urlencoded({extended:true}));
//load home page 
const controller = require('../Controllers/Homecontroller');
//adding route
Homepage.get("/",controller.indexpage);
//adding route
Homepage.post("/",controller.Allfetchdata);
//exporting route
module.exports = Homepage;
