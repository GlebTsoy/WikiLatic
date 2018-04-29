exports.login_get = function(req, res){
    res.render('login');
}

exports.login_post = function(req, res){
    res.send(req.body.name);
}