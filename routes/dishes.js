var express = require('express');
var bodyParser = require('body-parser');

//var app = express();
var dishRouter = express.Router();
dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all(function(req,res,next){
	res.writeHead(200,{'Content-Type':'text/html'});
	next();
})

.get(function(req,res,next){
	res.end('Will send the dishes');
})

.post(function(req,res,next){
	res.end('Will push the dishes with name ' + req.body.name);
})

.delete(function(req,res,next){
	res.end('Will delete the dishes');
});

dishRouter.route('/:dishid')
.all(function(req,res,next){
	res.writeHead(200,{'Content-Type':'text/html'});
	next();
})

.get(function(req,res,next){
	res.end('Will get the dishes with Id  ' + req.params.dishid);
})

.put(function(req,res,next){
	res.write('Will update the dishes with id ' + req.params.dishid + '\n');
	res.end('Will udpate the dish with name: ' + req.body.name + ' and description: ' + req.body.desc) 
})

.delete(function(req,res,next){
	res.end('Will delete the dishesh with id ' + req.params.dishid);
});

module.exports = dishRouter;