/*jslint white: true */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');

var ActivitySchema = new Schema({
  ofUserEmail: {type: String, required: true},
  activity: {type: String, required: true},
  location: {type: String, required: true},
  ofUserEmails: [String],
  created: {type: Date, default: Date.now},
  updated: {type: Date, default: Date.now}
});

ActivitySchema.methods = {};
ActivitySchema.plugin(autoIncrement.plugin, 'Activity');
mongoose.model('Activity', ActivitySchema);