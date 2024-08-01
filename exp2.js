var express = require('express');
var app = express();
app.get('/home',function(req,res){
	res.send('Welcome to home page');
});
app.post('/contact',function(req,res){
	res.send('Welcome to express page');
});
app.all('/test',function(req,res){
	res.send('Welcome to express home page');
});
app.listen(3000);