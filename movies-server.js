const express = require('express');
const mongoose = require('mongoose');
const parser = require('body-parser');
const Movie = require('./Models/alternativeMovie.js');
const session = require('express-session');
const cookieParser = require('cookie-parser');
/* ----- add new requires here ------- */
const passport = require('passport');
const flash = require('express-flash');

require('dotenv').config();

require('./handlers/dataConnector').connect();

const app = express();
app.use(parser.json());
app.use(parser.urlencoded({extended:true}));
// serves up static files from the public folder. 
app.use(express.static('public'));
app.use('/static', express.static('public'));
// Express session
app.use(cookieParser('oreos'));
app.use(
    session({
      secret: process.env.SECRET,
      resave: true,
      saveUninitialized: true
    })
  );
//passport middleware
app.use(passport.initialize());
app.use(passport.session());

//use express flash
app.use(flash());
//set up passport authentication
require('./handlers/auth.js');
//set up route handlers
const loginRoute = require('./handlers/loginRouter.js');
app.use('/', loginRoute);

app.use('/api',require('./handlers/movieRouter.js'));

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({ error : err });
});
let port = process.env.PORT || 8080;
app.listen(port,function(){
    console.log("Server running at port = "+ port);
});

