var app = angular.module("iAmSkoot", ["ngRoute"]);

app.config(function($routeProvider) {
	$routeProvider
		.when("/", {
			templateUrl: "./iamskoot/views/home.html",
			controller: "HomeCtrlr",
			resolve: {

			}
		})
		.when("/pics", {
			templateUrl: "./iamskoot/views/pics.html",
			controller: "PicsCtrlr",
			resolve: {

			}
		})
		.otherwise("/");
});
