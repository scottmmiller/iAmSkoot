// var app = angular.module("hmCaptures");
//
// app.controller("MainController", function($scope) {
//
//   $scope.test = "TEST";
//
// });


(function() {

  angular.module("hmCaptures")
    .controller('MainController', MainController);

  function MainController(mainService) {

    var vm = this;
    angular.extend(vm, {

    });

      vm.test = "TEST";

  };    //end of MainController

})();
