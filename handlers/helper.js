//user passport authentication infrastructure to check if authentication
//is needed at some point in middleware pipeline
function ensureAuthenticated(req, resp, next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash('error', 'please log in to view that resource');
    //resp.render('/login', {message: req.flash('info')} );
    resp.redirect('/login/error');
}
module.exports ={
    ensureAuthenticated
};