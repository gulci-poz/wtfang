// angular realizuje ideę Reusable Component (lub Web Component) za pomocą dyrektyw (wyświetlanie za pomocą ACEM)
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

// dyrektywy można definiować w osobnych plikach (również kontrolery, routes i serwisy)
myApp.directive("searchResult", function () {

    // zwracamy obiekt dyrektywy - jest to obiekt JS
    // replace: true - wstawia kod dyrektywy bez nadrzędnego elementu HTML; domyślnie false
    // restrict - wyświetlanie z użyciem atrybutu, klasy, elementu lub komentarza: A, C, E, M; poszczególne dyrektywy w HTML będą ignorowane, jeśli nie będzie ich na liście; domyślnie AE
    // w przypadku komentarza i replace: false dyrektywa nie będzie wyświetlona
    return {
        restrict: "ACEM",
        // zamiast template używamy templateUrl (HTML w osobnych plikach)
        /*
        template: '<a href="#" class="list-group-item"><h4 class="list-group-item-heading">Doe, John</h4><p class="list-group-item-text">555 Main St., New York, NY 11111</p></a>',
        */
        templateUrl: "directives/searchresult.html",
        replace: true
    };
});
