//env
require('dotenv').config()
//express js
const express = require("express");
//create aap 
const application = express();
//path
const path = require("path");
//static
const static = path.join(__dirname, "./Public");
//set home engine
 application.set('view engine', 'ejs');
// //set file path
const Views = path.join(__dirname, './Views');

console.log(Views)
// //set route
application.set("Views",Views);
//use a folder for staic files
application.use(express.static(static));
//set static
application.use(express.static(path.join(__dirname,"./node_modules/bootstrap/dist/css")));
//set bs5js
application.use(express.static(path.join(__dirname,"./node_modules/bootstrap/dist/js")));

const bootstrapviewr = path.join(__dirname,"./node_modules/bootstrap/dist/css");
console.log(bootstrapviewr)
//get Home route
const youtubepage = require("./Routes/Youtuberoute");
//get home page
application.use(youtubepage);
//get insta route
const instagrampage = require("./Routes/Instagramroute");
//get insta page
application.use(instagrampage);
//get face route
const facepage = require("./Routes/Facebookroute");
//get face page
application.use(facepage);
//get twiiter route
const pintrestpage = require("./Routes/Pintrestroute");
//get face page
application.use(pintrestpage);
//get twiiter route
const tiktokpage = require("./Routes/Tiktokroute");
//get face page
application.use(tiktokpage);
//get privcay route
const aboutpage = require("./Routes/Aboutroute");
//set route 
application.use(aboutpage);
const Homepage = require ("./Routes/Homeroute");
//use homepage
application.use(Homepage);


//get notfound
const notfind = require("./Routes/notfindroute");
//set notfound 
application.use(notfind);


//set a listen port
application.listen(process.env.PORT_KEY, () => {
    console.log(`http://localhost:${process.env.PORT_KEY}`);
});

console.log("Look if it works gfsdfgsfgsdf")