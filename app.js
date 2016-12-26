var express = require('express');
var morgan = require('morgan');
var dishrouter = require('./routes/dishes');
var leadershipRouter  = require('./routes/leadership')
var promotions = require('./routes/promotions');
var hostname = process.env.OPENSHIFT_NODEJS_IP || 3000;
var port = process.env.OPENSHIFT_NODEJS_PORT || '127.0.0.1';

var app = express();
app.use(morgan('dev'));
app.use('/dishes',dishrouter);
app.use('/leadership',leadershipRouter);
app.use('/promotions',promotions);

app.use(express.static(__dirname + '/public'));

app.listen(port,hostname,function(){
	console.log('Server Listening on host ' + hostname + ':' + port);
});