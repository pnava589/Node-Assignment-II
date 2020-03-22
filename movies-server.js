const express = require('express');
const mongoose = require('mongoose');
const parser = require('body-parser');
const Movie = require('./Models/alternativeMovie.js');




require('dotenv').config();

require('./handlers/dataConnector').connect();



const app = express();

app.use(parser.json());
app.use(parser.urlencoded({extended:true}));

app.use('/',require('./handlers/movieRouter.js'));

let port = process.env.PORT || 8080;
app.listen(port,function(){
    console.log("Server running at port = "+ port);
});

