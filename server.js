"use strict";

var Express = require("express");
var BodyParser = require("body-parser");
var Mongoose = require("mongoose");


var App = Express();
var port = process.env.IAMSKOOT_PORT || 9090;

App.use(Express.static(__dirname + "/public"));
App.use(BodyParser.json());



App.listen(port, function() {
	console.log("Listening on port: " + port);
})