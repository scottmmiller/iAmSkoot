var app = angular.module("iAmSkoot", ["ngRoute"]);

app.config(function($routeProvider) {
	$routeProvider
		.when("/", {
			templateUrl: "./views/home.html",
			controller: "HomeCtrlr",
			resolve: {

			}
		})
		.when("/pics", {
			templateUrl: "./views/pics.html",
			controller: "PicsCtrlr",
			resolve: {
				
			}
		})
		.otherwise("/");
});