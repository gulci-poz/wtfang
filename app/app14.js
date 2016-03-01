var myApp = angular.module("myApp", []);

// dla każdego kontrolera dostajemy nową instancję $scope

myApp.controller("mainController", ["$scope", function ($scope) {

    $scope.name = "Main";

}]);

myApp.controller("secondaryController", ["$scope", function ($scope) {

    $scope.name = "Secondary";

}]);
