var myApp = angular.module('myApp', []);

// tylko na potrzeby odczytu w innym kontrolerze możemy użyć stałej, nie potrzebujemy serwisu
myApp.constant("appGlobals", {
    defaultValue: 10,
    appName: "constantApp"
});

// stałe możemy wstrzykiwać
myApp.controller("ctrl1",
    ["$scope", "appGlobals", function ($scope, appGlobals) {

        $scope.globals = appGlobals;
}]);
