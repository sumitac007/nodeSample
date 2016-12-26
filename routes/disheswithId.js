var express = require('express');
var bodyParser = require('body-parser');


var router = express.Router();
router.use(bodyParser.json());

router.route('/:dishid')
.all(function(req,res,next){
	res.writeHead(200,{'Content-Type':'text/html'});
	next();
})

.get(function(req,res,next){
	res.end('Will get the dishes with Id  ' + req.params.dishid);
})

.put(function(req,res,next){
	res.write('Will update the dishes with id ' + req.params.dishid);
	res.end('Will udpate the dish with name: ' + req.body.name + ' and description: ' + req.body.desc) 
})

.delete(function(req,res,next){
	res.end('Will delete the dishesh with id ' + req.params.dishid);
});

module.exports = router; 