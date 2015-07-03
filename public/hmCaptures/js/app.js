// (function() {
//   "use strict";
//   angular.module("hmCaptures", ["ngRoute"]);
// })();

var app = angular.module("hmCaptures", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "../views/mainView.html",
      controller: 'MainController'
      // controllerAs: 'main'
    })
    .otherwise("/");
});
