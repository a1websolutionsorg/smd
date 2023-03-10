const express = require("express");
//make it app
const notfindpage = express();
//path Module
const path = require('path');
//set home engine
notfindpage.set('view engine', 'ejs');
//set file path
const Views = path.join(__dirname, '../Views');
//set view engine path
notfindpage.set('views',Views);
//get home controller
const controller = require('../Controllers/notfindcontroller');
//set home
notfindpage.get("*",controller.notfind);

//export home
module.exports = notfindpage;