var mongoose = require('mongoose');
var User = mongoose.model('User');

exports.login = function (req, res) {
  User.find({email: req.body.email}, function (err, result) {
    if (err) {
      return res.send(500);
    }

    if (result.length > 0) {
      if (result[0].password === req.body.password) {
        return res.json({status: 'SUCCESS', response: {id: result[0]._id}});
      } else {
        if (result[0].password !== req.body.password) {
          return res.json({status: 'ERROR'});
        }
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

      res.json({status: 'SUCCESS', response: {id: u._id}});
    });
  });
};