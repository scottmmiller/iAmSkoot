"use strict";
var Express = require('express');
var app = Express();
// var Router = app.router();
var iamskootPort = process.env.IAMSKOOT_PORT || 9090;

app.use(Express.static(__dirname + '/public'));

// Router.use("/hmcaptures", function(req, res, next) {
// });



app.listen(iamskootPort);
console.log("Serving up on: " + iamskootPort);
