var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(function ($routeProvider) {

    $routeProvider

        .when("/", {
            templateUrl: "pages/main5.html",
            controller: "mainController"
        })

        .when("/second", {
            templateUrl: "pages/second5.html",
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

        // na potrzeby repeated directive
        $scope.people = [
            {
                name: "John Doe",
                address: "555 Main St.",
                city: "New York",
                state: "NY",
                zip: "11111"
            },
            {
                name: "Jane Doe",
                address: "333 Second St.",
                city: "Buffalo",
                state: "NY",
                zip: "22222"
            },
            {
                name: "George Doe",
                address: "111 Third St.",
                city: "Miami",
                state: "FL",
                zip: "33333"
            }
        ];

        $scope.formattedAddress = function (person) {
            return person.address + ", " + person.city + ", " + person.state + " " + person.zip;
        }

}]);

myApp.controller("secondController", ["$scope", "$log",
    function ($scope, $log) {



    }
]);

// transclusion - umieszczenie jednego dokumentu w drugim
// ng-transclude w searchresulttrans

myApp.directive("searchResultFun", function () {

    return {
        restrict: "ACEM",
        templateUrl: "directives/searchresulttrans.html",
        replace: true,
        scope: {
            personObject: "=",
            formattedAddressFunction: "&"
        },
        // transclusion - umieszczenie jednego dokumentu w drugim
        // dodajemy zawartość, której nie ma normalnie w dyrektywie wewnątrz search-result w main5
        // dodajemy ng-transclude w searchresulttrans, tam będzie dodatkowa zawartość z main5 (można też użyć atrybutu ng-transclude)
        // tutaj dajemy transclude: true
        transclude: true
    }
});
