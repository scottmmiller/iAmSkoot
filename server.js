"use strict";

//    NPM CONNECT
var connect = require("connect");
var serveStatic = require("serve-static");
var http = require("http");

// var angular = require("angular");
// var angularRoute = require("angular-route");
// var bootstrap = require("bootstrap");
// var jquery = require("jquery");
// var materialize = require("materialize");

var app = connect();

var port = process.env.HMCAPTURES_PORT || 9999;
app.use(serveStatic(__dirname + '/public')).listen(port);
console.log("Server running on: " + port);

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

// var Express = require("express");
// var BodyParser = require("body-parser");
// var Passport = require("passport");
// var Mongoose = require("mongoose");
// var Session = require("express-session");
//
// var app = Express();
// var port = process.env.HMCAPTURES_PORT || 9999;
//   console.log("EXPRESS_PORT: " + port)
// var mongoUri = "";
//
// //    *****MIDDLEWARE*****
// app.use(Session ({
//   secret: "hmCaptures",
//   resave: true,
//   saveUninitialized: true
// }));
//
// //    *****STRATEGIES*****
//
// //    *****CONNECTIONS*****
// Mongoose.connect(mongoUri, function() {
//   console.log("DB connected on " + mongoUri)
// })
//
// app.listen(port, function() {
//   if(port === process.env.EXPRESS_PORT) {
//     console.log("Listening on EXPRESS_PORT");
//   } else {
//     console.log("Listening on 9999")
//   }
// })
//
// // var http = require("http");
// //
// // http.createServer(function(req, res) {
// //
// //
// // }).listen(80);
