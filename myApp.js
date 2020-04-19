var express = require('express');
var path = require('path');
var router = require('./Router/router')
var app = express();

app.use(express.urlencoded());

app.set('views', path.join(__dirname , 'Views'));
app.set('view engine', 'ejs');

app.use('/', router);

app.listen(3333, () =>{
    console.log("server is running .......");
});      
