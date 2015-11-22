var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');

var ReviewSchema = new Schema({
  ofUserId: Schema.Types.ObjectId,
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  reviews: Array,
  created: {type: Date, default: Date.now}
});

ReviewSchema.methods = {};
ReviewSchema.plugin(autoIncrement.plugin, 'Review');
mongoose.model('Review', ReviewSchema);