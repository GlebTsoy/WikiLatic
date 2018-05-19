module.exports = function(app) {
 
	var express = require("express");
	var router = express.Router();
	
    const controllers = require('../controllers/user.controller.js');
	
	var path = __basedir + '/views/';
	
	router.use(function (req,res,next) {
		console.log("/" + req.method);
		next();
	});
	
	app.get('/', (req,res) => {
		res.sendFile(path + "Landing_page.html");
	});
 
    // Save a User to MongoDB
    app.post('/addaccount', controllers.saveaccount);
 
    // Retrieve all Users
    app.get('/findallaccount', controllers.findallaccount);
	
	app.use("/",router);
}