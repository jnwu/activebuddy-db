/*jslint white: true */

var mongoose = require('mongoose');
var Activity = mongoose.model('Activity');

exports.add = function (req, res) {
  Activity.find({ofUserEmail: req.body.ofUserEmail,
                 activity: req.body.activity,
                 location: req.body.location}, function (err, result) {
    if (err) {
      return res.send(500);
    }

    if (result.length > 0) {
    	return res.json(result);
    }

    var a = new Activity({
      ofUserEmail: req.body.ofUserEmail,
      activity: req.body.activity,
      location: req.body.location,
      ofUserEmails: req.body.ofUserEmails
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
	var query = {};

  if (req.query.location) {
	  query.location = req.query.location;
	}

	if (req.query.activity) {
	  query.activity = req.query.activity;
	}

	if (req.query.date) {
	  query.date = req.query.date;
  }

  Activity.find(query, {_id: 0}, function (err, result) {
    if (err) {
      return res.send(500);
    }

    res.json(result);
  });
};