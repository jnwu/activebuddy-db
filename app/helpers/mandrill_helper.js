/*jslint white: true */

var http = require('http');

exports.send = function (email) {
  var post_data = JSON.stringify({
    key: "MqH8K2UnhHdocxxYYXvFjw",
    template_name: "activepal",
    template_content: "",
    message: {
      to: [{email: email}]
    },
    async: true,
    ip_pool: "Main Pool"
  });

  var post_options = {
    host: 'mandrillapp.com',
    port: '80',
    path: '/api/1.0/messages/send-template.json',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(post_data)
    }
  };

  // Set up the request
  var post_req = http.request(post_options, function (res) {
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
      console.log('Response: ' + chunk);
    });
  });

  post_req.write(post_data);
  post_req.end();  
};