var express = require('express');


var router = express.Router();

router.route('/')
.all(function(req,res,next){
	res.writeHead(200,{'Content-Type':'text/html'});
	next();
})

.get(function(req,res,next){
	res.end('Will get the leaders');
})

.delete(function(req,res,next){
	res.end('Will delete the leaders');
});

module.exports = router;