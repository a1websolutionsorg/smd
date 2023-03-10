const express = require("express");
//make it app
const tiktokpage = express();
//path Module
const path = require('path');
//set home engine
tiktokpage.set('view engine', 'ejs');
//set file path
const Views = path.join(__dirname, '../Views');
//set view engine path
tiktokpage.set('views',Views);
//body-parser
const bodyParser = require("body-parser");
// use bodyParser
tiktokpage.use(bodyParser.json());
// encode url data
tiktokpage.use(bodyParser.urlencoded({extended:true}));
//get home controller
const controller = require('../Controllers/Tiktokcontroller');
//set home
tiktokpage.get("/tiktok",controller.tiktok);
//post
tiktokpage.post("/tiktok",controller.tiktokdata);
//export home
module.exports = tiktokpage;