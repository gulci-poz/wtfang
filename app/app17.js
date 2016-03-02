var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(function ($routeProvider) {

    $routeProvider

        .when("/", {
            templateUrl: "pages/main2.html",
            controller: "mainController"
        })

        .when("/second", {
            templateUrl: "pages/second2.html",
            controller: "secondController"
        });

});

myApp.service("nameService", function () {

    var self = this;

    this.name = "John Doe";

    this.nameLength = function () {
        return self.name.length;
    };

});

myApp.controller("mainController", ["$scope", "$log", "nameService", function ($scope, $log, nameService) {

    $scope.name = nameService.name;

    // nie ma mechanizmu, który zrobiłby w takim wypadku automatyczą aktualizację zmiennej w nameService, wystarczy użyć listy Watchers

    $scope.$watch("name", function () {
        nameService.name = $scope.name;
    });

}]);

myApp.controller("secondController", ["$scope", "$log", "nameService",
    function ($scope, $log, nameService) {

        $scope.name = nameService.name;

        $scope.$watch("name", function () {
            nameService.name = $scope.name;
        });

    }
]);
