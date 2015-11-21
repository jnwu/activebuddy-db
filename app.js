/*jshint unused: true, node: true */

var http = require('http');
var mongoose = require('mongoose');
var User = require('./app/models/user');

var express = require('express');
var app = express();
var exports = module.exports = app;
var env = app.get('env');
var environment = require('./config/environment');
var routes = require('./config/routes')(app);
var database = require('./config/database');

if (env === 'development') {
    database = database.staging;
    app.use(express.errorHandler());
} else if (env === 'production') {
    database = database.production;
}

// database connect
var connect = function () {
    var options = {server: {socketOptions: {keepAlive: 1}}};
    mongoose.connect('mongodb://'
            + database.username + ':'
            + database.password + '@'
            + database.host + ':'
            + database.port + '/'
            + database.database, options);
};

var db = mongoose.connection;
db.on('error', function (err) {
    console.log(err);
});

db.on('disconnected', function () {
    connect();
});

connect();

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});