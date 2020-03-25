const express = require('express');
const router = express.Router();
const passport = require('passport');
const helper = require('./helper.js');
// Welcome Page
router.get('/', helper.ensureAuthenticated, (req, resp) => {
   resp.render('/home', {user: req.user});
});

router.get('/About', helper.ensureAuthenticated, (req, resp) => {
   resp.render('/About', {user: req.user});
});

router.get('/logout', (req, resp) => {
   req.logout();
   req.flash('info', 'You were logged out');
   resp.render('login', {message: resp.flash('info')} );
});
router.post('/login', async(req, resp, next)=>{
   //user passport authentication to see if valid login
   passport.authenticate('localLogin',
                           { successRedirect: '/static/home.html',
                              failureRedirect: '/static/login.html',
                              failureFlash: true})(req,resp,next);


});

module.exports = router;