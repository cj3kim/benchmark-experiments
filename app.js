var path        = require("path");
var fs          = require("fs");
var serveIndex  = require("serve-index");
var serveStatic = require("serve-static");

var express     = require("express");
var app         = express();

app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.set("views", "./app/views");

var bodyParser   = require("body-parser"),
    multer       = require("multer"),
    compression  = require("compression")(),
    responseTime = require("response-time")() ;

app.use(bodyParser.json());                         // for parsing application/json

app.use(compression);
app.use(responseTime);

app.use('/public', serveIndex('public/'));
app.use('/public', serveStatic('public/'));

app.get('/', function(req, res) {
    res.render('index')
});

var port = 1337;
console.log('Starting server at port ' + port + '.');

app.listen(port);
