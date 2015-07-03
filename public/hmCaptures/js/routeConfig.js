(function() {

  angular.module("hmCaptures")
    .config(config);

  function config($routeProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "../views/mainView.html",
        controller: 'MainController'
        // controllerAs: 'main'
      })
      .otherwise('/');
  };

})();
