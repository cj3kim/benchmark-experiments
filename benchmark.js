var siege = require("siege");

var port = 1337;
var requests = 100000;
var concurrentRequests = 1000;


siege().on(port)
       .concurrent(concurrentRequests)
       .for(requests).times
       .get('/')
       .attack();
