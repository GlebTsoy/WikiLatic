const User = require('../models/user.model.js');
 
// Save FormData - User to MongoDB
exports.saveaccount = function(req, res) {
	console.log('Post a User: ' + JSON.stringify(req.body));
	
    // Create a Customer
	const user = new User({
        firstname: req.body.firstname,
		lastname: req.body.lastname,
		username: req.body.username,
		password: req.body.password,
		_id: req.body.email
    });
 
    // Save a Customer in the MongoDB
    user.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};
 
// Fetch all Users
exports.findallaccount = function(req, res)   {
	User.find()
    .then(users => {
        res.send(users);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};