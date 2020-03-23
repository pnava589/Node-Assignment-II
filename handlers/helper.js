//user passport authentication infrastructure to check if authentication
//is needed at some point in middleware pipeline
function ensureAuthenticated(req, resp, next){
    if(req.isAuthenticated()){
        return next();
    }
    //req.flash('info', 'Please log in to view that resource');
    //resp.render('/static/login.html', {message: req.flash('info')} );
    resp.json({message: 'please login to view resource'});
}
module.exports ={
    ensureAuthenticated
};