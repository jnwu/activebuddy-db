/*jslint white: true */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');

var UserSchema = new Schema({
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  reviews: Array,
  created: {type: Date, default: Date.now}
});

UserSchema.methods = {};
UserSchema.plugin(autoIncrement.plugin, 'User');
mongoose.model('User', UserSchema);