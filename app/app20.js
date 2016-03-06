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

myApp.directive("searchResultFun", function () {

    return {
        restrict: "ACEM",
        templateUrl: "directives/searchresultfun.html",
        replace: true,
        scope: {
            personObject: "=",
            formattedAddressFunction: "&"
        },
        // skrótowa forma post-linking, bez compile (mamy pusty compile) i pre-linking
        link: function (scope, elements, attrs) {
            console.log("Linking...");

            // elements to tak naprawdę element jQuery
            // używamy funkcji jQuery
            // angular oferuje jqLite
            if (scope.personObject.name === "Jane Doe") {
                elements.addClass("btn");
                elements.addClass("active");
            }
        }
    }
});
