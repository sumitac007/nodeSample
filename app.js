var express = require('express');
var morgan = require('morgan');
var dishrouter = require('./routes/dishes');
var leadershipRouter  = require('./routes/leadership')
var promotions = require('./routes/promotions');


var app = express();
app.set('port', (process.env.PORT || 5000));
app.use(morgan('dev'));
app.use('/dishes',dishrouter);
app.use('/leadership',leadershipRouter);
app.use('/promotions',promotions);

app.use(express.static(__dirname + '/public'));

// var server_port = process.env.OPENSHIFT_NODEJS_PORT || 3000;
// var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || 'PNEITSH61925D';


app.listen(app.get('port'), function () {
  console.log( "Listening on " +  app.get('port'))
});