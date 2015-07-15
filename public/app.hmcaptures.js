var app = angular.module('hmCaptures', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {

    //  use the HTML5 History API for prettify URL
    // $locationProvider.html5Mode(true);
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    })
    
  $routeProvider
    .when('/', {
      templateUrl: '/hmcaptures/views/mainView.html',
      controller: 'MainController',
      resolve: {

      }
    })
    // .when('/', {
    //   templateUrl: '',
    //   controller: '',
    //   resolve: {
    //
    //   }
    // })
    .otherwise('/');

});
