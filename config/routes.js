var controllers = require('../app/controllers');
var activity = require('../app/controllers/activity');
var user = require('../app/controllers/user');
var review = require('../app/controllers/review');

module.exports = function (app) {
  app.get('/', controllers.index);

  app.post('/user', user.login);
  app.get('/activity/:id', activity.search);
  app.get('/review/:id', review.search);
};