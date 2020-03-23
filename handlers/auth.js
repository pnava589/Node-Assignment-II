const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const UserModel = require('../models/User.js');
//maps the passport usr+passwd to the names of fields in database
const localOpt = {
    usernameField : 'email',
    passwordField: 'password'
};
//define the strategy for validating 
const strategy = new LocalStrategy(localOpt, async(email,password,done)=>{
    try {
        //find the user in the db associated with the email
        const userChosen = await UserModel.findOne({ email: email });
        if(!userChosen){
            //if email isnt found in db set flash message
            return done(null, false, {message: 'email not found'});
        }
        //validate the password and make sure it matches with the corresponding
        //hash stored in the database, if passwords match return true.
        const validate = await userChosen.isValidPassword(password);
        if(!validate){
            return done(null, false, {message: 'Wrong password'});
        }
        //send the user information to the next middleware
        return done(null, userChosen, {message: 'Logged in successfully'});
    }
    catch(error){
        return done(error);
    }
});
//for localLogin use our strategy to handle user login
passport.use('localLogin', strategy);
// by default, passport uses sessions to maintain login status ...
// you have to determine what to save in session via serializeUser
// and deserializeUser. In our case, we will save the email in the session data
passport.serializeUser((user, done)=> done(null, user.email));

passport.deserializeUser((email,done)=>{
    UserModel.findOne({email: email}, (err,user)=> done(err, user));
});