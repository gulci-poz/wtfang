// angular realizuje ideę Reusable Component (lub Web Component) za pomocą atrybutów elementów html - dyrektyw
// angular normalizuje nazwy atrybutów z myślnikami do camel case, normalizacja działa również w drugą stronę
// np. mamy dyrektywę ng-messages i moduł ngMessages

var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(function ($routeProvider) {

    $routeProvider

        .when("/", {
            templateUrl: "pages/main3.html",
            controller: "mainController"
        })

        .when("/second", {
            templateUrl: "pages/second3.html",
            controller: "secondController"
        });

});

myApp.controller("mainController", ["$scope", "$log",
    function ($scope, $log) {



}]);

myApp.controller("secondController", ["$scope", "$log",
    function ($scope, $log) {



    }
]);

// mamy normalizację w obie strony
myApp.directive("searchResult", function () {

    // zwracamy obiekt JS - dyrektywę
    // domyślnie custom directives to tagi HTML, nie atrybuty
    // replace: true - wstawia kod bezpośrednio, bez nadrzędnego elementu search-result; w html nadal wstawiamy za pomocą tagu search-result
    return {
        template: '<a href="#" class="list-group-item"><h4 class="list-group-item-heading">Doe, John</h4><p class="list-group-item-text">555 Main St., New York, NY 11111</p></a>',
        replace: true
    };
});
// 11:10
