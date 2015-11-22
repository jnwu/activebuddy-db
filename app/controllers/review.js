var mongoose = require('mongoose');
var Review = mongoose.model('Review');

exports.search = function (req, res) {
  res.json(200);
};