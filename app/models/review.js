/*jslint white: true */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');

var ReviewSchema = new Schema({
  ofUserEmail: {type: String, required: true},
  ofReviewUserEmail: {type: String, required: true},
  content: String,
  created: {type: Date, default: Date.now}
});

ReviewSchema.methods = {};
ReviewSchema.plugin(autoIncrement.plugin, 'Review');
mongoose.model('Review', ReviewSchema);