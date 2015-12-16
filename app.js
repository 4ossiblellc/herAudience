var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

var twitterAPI = require('node-twitter-api');
var twitter = new twitterAPI({
	consumerKey: 'c2eHz740jarogw2xcuv4BpBse',
	consumerSecret: 'nqGBC97V4wqTbk4lJQ7MEGEFVtMuze7HlhqpS6m3BGAeVL6ovu',
	callback: 'http://yoururl.tld/something'
});