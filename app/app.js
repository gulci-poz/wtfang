var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(function ($routeProvider) {

    $routeProvider

        .when("/", {
            templateUrl: "pages/main4.html",
            controller: "mainController"
        })

        .when("/second", {
            templateUrl: "pages/second4.html",
            controller: "secondController"
        });

});

myApp.controller("mainController", ["$scope", "$log",
    function ($scope, $log) {

        $scope.person = {
            name: "John Doe",
            address: "555 Main St.",
            city: "New York",
            state: "NY",
            zip: "11111"
        };

        $scope.formattedAddress = function (person) {
            return person.address + ", " + person.city + ", " + person.state + " " + person.zip;
        }

}]);

myApp.controller("secondController", ["$scope", "$log",
    function ($scope, $log) {



    }
]);

myApp.directive("searchResultFun", function () {

    return {
        restrict: "ACEM",
        templateUrl: "directives/searchresultfun.html",
        replace: true,
        scope: {
            personObject: "=",

            // dodajemy funkcję ze scope kontrolera - &
            // w searchresult2 przekazujemy mapping object
            // funkcja może dokonywać zmian na scope kontrolera, oznacza to, że z poziomu dyrektywy możemy zmienić nie wprost zawartość modelu kontrolera
            formattedAddressFunction: "&"
        }
    };
});
