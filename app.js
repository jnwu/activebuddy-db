/*jslint white: true */

process.env.mode = 'staging';

var database, dbString, serverOptions;
var mongoose = require('mongoose');
var connect = function () {
  database = require('./config/database');

  if (process.env.mode === 'staging') {
    database = database.staging;
  } else if (process.env.mode === 'production') {
    database = database.production;
  }

  serverOptions = {server: {socketOptions: {keepAlive: 1}}};
  dbString = 'mongodb://'
            + database.username + ':'
            + database.password + '@'
            + database.host + ':'
            + database.port + '/'
            + database.database;
  console.log(dbString);
  mongoose.connect(dbString, serverOptions);
};

var db = mongoose.connection;
db.on('error', console.error);
db.on('disconnected', connect);
connect();

require('mongoose-auto-increment').initialize(db);
require('./app/models/user');
require('./app/models/activity');
require('./app/models/review');

var http = require('http');
var express = require('express');
var app = express();

module.exports = app;
var exports = module.exports;
var environment = require('./config/environment');
var routes = require('./config/routes')(app);

http.createServer(app).listen(app.get('port'));