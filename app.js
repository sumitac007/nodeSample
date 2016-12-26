var express = require('express');
var morgan = require('morgan');
var dishrouter = require('./routes/dishes');
var leadershipRouter  = require('./routes/leadership')
var promotions = require('./routes/promotions');


var app = express();
app.use(morgan('dev'));
app.use('/dishes',dishrouter);
app.use('/leadership',leadershipRouter);
app.use('/promotions',promotions);

app.use(express.static(__dirname + '/public'));

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';


app.listen(server_port, server_ip_address, function () {
  console.log( "Listening on " + server_ip_address + ", port " + server_port )
});