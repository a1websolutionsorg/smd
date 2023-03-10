const express = require("express");
//make it app
const aboutpage = express();
//path Module
const path = require('path');
//set home engine
aboutpage.set('view engine', 'ejs');
//set file path
const Views = path.join(__dirname, '../Views');
//set view engine path
aboutpage.set('views',Views);
//get home controller
const controller = require('../Controllers/Aboutcontroller');
//set home
aboutpage.get("/about",controller.About);

//export home
module.exports = aboutpage;