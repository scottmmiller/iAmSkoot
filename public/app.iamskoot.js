var app = angular.module("iAmSkoot", ["ngRoute"]);

app.config(function($routeProvider, $locationProvider) {

	//  use the HTML5 History API for prettify URL
	// $locationProvider.html5Mode(true);
	$locationProvider.html5Mode({
	  enabled: true,
	  requireBase: false
  });

$routeProvider
		.when("/", {
			templateUrl: "iamskoot/views/iamskoot.html",
			controller: "HomeCtrlr",
			resolve: {

			}
		})
		.when("/pics", {
			templateUrl: "iamskoot/views/pics.html",
			controller: "PicsCtrlr",
			resolve: {

			}
		})
		.when("/hmcaptures", {
			templateUrl: "hmCaptures/views/hmcaptures.html",
			controller: "MainController",
			resolve: {

			}
		})
		.otherwise("/");

});
