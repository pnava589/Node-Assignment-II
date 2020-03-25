const helper = require('./helper.js');
const passport = require('passport');
function handleAll(nextApp, app, handle){
    app.get('/', helper.ensureAuthenticated, (req,resp) => {
        return nextApp.render(req,resp, '/home', req.query);
    });
    app.get('/home', helper.ensureAuthenticated, (req,resp) => {
        return nextApp.render(req,resp, '/home', req.query);
    });
    app.get('/login', (req, resp)=>{
        return nextApp.render(req,resp, '/login', req.query);
    });
    app.get('/login/error', (req, resp)=>{
        //console.log(req.flash('error'));
        //if(req.flash('error').message == null) req.flash('error', 'Please log in to view that!');
        return nextApp.render(req,resp, '/login', {message: req.flash('error')});
    });
    app.post('/login', async(req, resp, next)=>{
        //user passport authentication to see if valid login
        passport.authenticate('localLogin',
                                { successRedirect: '/home',
                                   failureRedirect: '/login/error',
                                   failureFlash: true})(req,resp,next);
     });
    app.get('*', (req,resp)=>{
        return handle(req,resp);
    });
}   

module.exports={
    handleAll
};