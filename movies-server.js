const express = require('express');

const parser = require('body-parser');

// use .env file for configuration constants
require('dotenv').config();

require('./routes/dataConnector.js').connect();

const app = express();

app.use(parser.json());
app.use(parser.urlencoded({extended:true}));
const movieRouter = require('./routes/movieRouter.js');
movieRouter.handleAllMovies(app);

let port = process.env.PORT || 8080;
app.listen(port,function(){
    console.log("Server running at port = "+ port);
});

