var app = angular.module("iAmSkoot", ["ngRoute"]);

app.config(function($routeProvider, $locationProvider) {
	$routeProvider
		.when("/", {
			templateUrl: "/iamskoot/views/home.html",
			controller: "HomeCtrlr",
			resolve: {

			}
		})
		.when("/pics", {
			templateUrl: "/iamskoot/views/pics.html",
			controller: "PicsCtrlr",
			resolve: {

			}
		})
		// .when("/hmcaptures", {
		// 	templateUrl: "/hmCaptures/views/mainView.html",
		// 	controller: "MainController",
		// 	resolve: {
		//
		// 	}
		// })
		.otherwise("/");

		// use the HTML5 History API
		$locationProvider.html5Mode(true);
});
