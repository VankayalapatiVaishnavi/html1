var express = require('Express');
var app = express();
var things = require('./exp1.js');
app.use('/vaishnavi',things);
app.listen(3000);