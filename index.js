// Require needed node modules 
var bodyParser = require('body-parser'); 
var ejsLayouts = require('express-ejs-layouts'); 
var express = require('express'); 

// Global variables 
var app = express();
var db = require('./models'); 

// Set and Use statements 
app.set('view engine', 'ejs'); 
app.use(bodyParser.urlencoded({ extended: false})); 
app.use(ejsLayouts); 

// Define Routes
app.get('/', function(req, res){
	res.send('stub for home page'); 
})

// Listen on port 3000
app.listen(3000, function(){
	console.log('Good Morning, port 3000!')
})
