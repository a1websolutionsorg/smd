const express = require("express");
//make it app
const Youtubepage = express();
//path Module
const path = require('path');
//set home engine
Youtubepage.set('view engine', 'ejs');
//set file path
const Views = path.join(__dirname, '../Views');
//set view engine path
Youtubepage.set('views',Views);
//body-parser
const bodyParser = require("body-parser");
// use bodyParser
Youtubepage.use(bodyParser.json());
// encode url data
Youtubepage.use(bodyParser.urlencoded({extended:true}));
//get home controller
const controller = require('../Controllers/Youtubecontroller');
//set home
Youtubepage.get("/youtube",controller.Youtube);
//post controller
Youtubepage.post("/youtube",controller.Youtubedata);
//export home
module.exports = Youtubepage;