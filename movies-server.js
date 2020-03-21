const express = require('express');
const mongoose = require('mongoose');
const parser = require('body-parser');
const Movie = require('./Models/alternativeMovie.js');



// use .env file for configuration constants
require('dotenv').config();

require('./test-mongo.js').connect();
//console.log(db);
//require('./routes/dataConnector.js').connect();
/*mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology:true},()=>{
    console.log('mongoDB connected...')
});*/


const app = express();

app.use(parser.json());
app.use(parser.urlencoded({extended:true}));

app.use('/',require('./routes/movieRouter.js'));

let port = process.env.PORT || 8080;
app.listen(port,function(){
    console.log("Server running at port = "+ port);
});

