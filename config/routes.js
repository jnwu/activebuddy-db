var controllers = require('../app/controllers');
var user = require('../app/controllers/user');

module.exports = function (app) {
    app.get('/', controllers.index);
    app.get('/user', user.search);
    app.post('/user', user.add);
}