const express = require("express");
//make it app
const pintrestpage = express();
//path Module
const path = require('path');
//set home engine
pintrestpage.set('view engine', 'ejs');
//set file path
const Views = path.join(__dirname, '../Views');
//set view engine path
pintrestpage.set('views',Views);
//body-parser
const bodyParser = require("body-parser");
// use bodyParser
pintrestpage.use(bodyParser.json());
// encode url data
pintrestpage.use(bodyParser.urlencoded({extended:true}));
//get home controller
const controller = require('../Controllers/Pintrestcontroller');
//set home
pintrestpage.get("/pintrest",controller.pinterest);
//set post method
pintrestpage.post("/pintrest",controller.pintrestdata);
//export home
module.exports = pintrestpage;