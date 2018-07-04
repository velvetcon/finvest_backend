var express = require('express');
var bodyParser = require('body-parser');

// create express app
var app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())


// Configuring the database
var dbConfig = require('./config/database.config.js');
var mysql = require('mysql');

var connection = mysql.createConnection(dbConfig.url)


connection.connect();


// define a simple route
app.get('/', function(req, res){
    res.json({"message": "Welcome"});
});

// Require Notes routes
require('./app/routes/index.js')(app);

// listen for requests
app.listen(8080, function(){
    console.log("Server is listening on port 3000");
});
