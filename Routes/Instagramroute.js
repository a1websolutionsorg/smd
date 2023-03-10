const express = require("express");
//make it app
const instapage = express();
//path Module
const path = require('path');
//set home engine
instapage.set('view engine', 'ejs');
//set file path
const Views = path.join(__dirname, '../Views');
//set view engine path
instapage.set('views',Views);
//body-parser
const bodyParser = require("body-parser");
// use bodyParser
instapage.use(bodyParser.json());
// encode url data
instapage.use(bodyParser.urlencoded({extended:true}));
//get home controller
const controller = require('../Controllers/Instagramcontroller');
//set home
instapage.get("/instagram",controller.instagram);
//set post method
instapage.post("/instagram",controller.userdata);
//export home
module.exports = instapage;