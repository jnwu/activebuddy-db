/*jslint white: true */

var mongoose = require('mongoose');
var User = mongoose.model('User');
var Mandrill = require('../helpers/mandrill_helper');

exports.login = function (req, res) {
  var email = req.body.email;

  User.find({email: email}, function (err, result) {
    if (err) {
      return res.send(500);
    }

    if (result.length > 0) {
      if (result[0].password === req.body.password) {
        return res.json({status: 'SUCCESS', response: {id: result[0]._id}});
      } else if (result[0].password !== req.body.password)  {
        return res.json({status: 'ERROR'});
      }
    }

    var u = new User({
      email: req.body.email,
      password: req.body.password
    });

    u.save(function (err) {
      if (err) {
        return res.send(500);
      }

      Mandrill.send(u.email);
      res.json({status: 'SUCCESS'});
    });
  });
};