"use strict";
var Express = require('express');
var app = Express();
var Router = app.Router();
var iamskootPort = process.end.IAMSKOOT_PORT || 9090;
var hmcapturesPort = process.end.HMCAPTURES_PORT || 9999;

app.listen(iamskootPort);
console.log("Serving up on: " + iamskootPort);

//    NPM CONNECT API
// var connect = require("connect");
// var serveStatic = require("serve-static");
// var http = require("http");
//
// var Connect = connect();
//
// var port = process.env.HMCAPTURES_PORT || 9999;
// Connect.use(serveStatic(__dirname + '/public')).listen(port);
// console.log("Server running on: " + port);

// //  JOE EAMES: PLURALSIGHT TUTORIAL
// var Express = require("express");
//
// var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
//
// var app = Express();
//
// // app.set('views', __dirname + '/views');
// // app.set('view engine', 'html');
//
// app.get("*", function(req, res) {
//   // res.render('index');
// });
//
// var port = 9999;
// app.listen(port, function() {
//   console.log("Server running on: " + port);
// });
//
// //   *********************

//    NODE.JS Main Page Example
// var http = require("http");
// http.createServer(function(req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end(index);
// }).listen(9999, "127.0.0.1");
// console.log("Server is running");
