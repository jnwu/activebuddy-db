/*jslint white: true */

var mongoose = require('mongoose');
var Review = mongoose.model('Review');

exports.add = function (req, res) {
  Review.find({ofReviewUserEmail: req.query.email}, function (err, result) {
    if (err) {
      return res.send(500);
    }

    if (result.length > 0) {
    	return res.json(result);
    }

    var a = new Review({
      ofUserEmail: req.body.email,
      ofReviewUserEmail: req.body.reviewUserEmail,
      content: req.body.content
    });

    a.save(function (err) {
      if (err) {
        return res.send(500);
      }

      res.json({status: 'SUCCESS'});
    });
  });
};

exports.search = function (req, res) {
  Review.find({ofReviewUserEmail: req.query.email}, {_id: 0}, function (err, result) {
    if (err) {
      return res.send(500);
    }

    res.json(result);
  });
};