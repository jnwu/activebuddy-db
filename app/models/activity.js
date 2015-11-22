var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');

var ActivitySchema = new Schema({
  ofUserId: {type: Schema.Types.ObjectId, required: true},
  activity: {type: String, required: true},
  location: {type: String, required: true},
  ofUserIds: [Schema.Types.ObjectId],
  created: {type: Date, default: Date.now}
});

ActivitySchema.methods = {};
ActivitySchema.plugin(autoIncrement.plugin, 'Activity');
mongoose.model('Activity', ActivitySchema);