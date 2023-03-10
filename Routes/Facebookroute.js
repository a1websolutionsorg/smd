const express = require("express");
//make it app
const facebookpage = express();
//path Module
const path = require('path');
//set home engine
facebookpage.set('view engine', 'ejs');
//set file path
const Views = path.join(__dirname, '../Views');
//set view engine path
facebookpage.set('views',Views);
//body-parser
const bodyParser = require("body-parser");
// use bodyParser
facebookpage.use(bodyParser.json());
// encode url data
facebookpage.use(bodyParser.urlencoded({extended:true}));
//get home controller
const controller = require('../Controllers/Facebookcontroller');
//set home
facebookpage.get("/facebook",controller.facebook);
//set post method
facebookpage.post("/facebook",controller.facebookdata);
//export home
module.exports = facebookpage;