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

        // dyrektywa (searchresult) jest częścią szablonu, w którym ją umieszczamy (main3)
        // szablon jest osadzany w kontrolerze, dyrektywa ma dostęp do jego modelu
        // domyślnie dyrektywa ma dostęp do parent $scope
        // w dyrektywie można zmieniać dane na $scope, czego możemy nie chcieć
        // w dyrektywie można zadeklarować isolated scope, definiujemy elementy modelu wewnątrz dyrektywy, izolujemy model, nie korzystamy ze scope kontrolera; nie jest to child scope, nie ma wiedzy o scope kontrolera
        // można zrobić wyłom w murze i w izolowanym scope uzyskać dostęp do zmiennych ze scope kontrolera
        $scope.person = {
            name: "John Doe",
            address: "555 Main St., New York, NY 11111"
        };

}]);

myApp.controller("secondController", ["$scope", "$log",
    function ($scope, $log) {



    }
]);

// dyrektywy można definiować w osobnych plikach (również kontrolery, routes i serwisy)
// dyrektywy służą do wyodrębniania atomowych funkcjonalności
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
        replace: true,
        /*
        // wersja dla @
        // isolated scope, tutaj definiujemy model
        scope: {
            // w atrybucie search-result możemy przekazać dane ze scope kontrolera (tam mamy jeszcze do niego dostęp)
            // mamy normalizację
            // w interpolacji w dyrektywie searchresult zmieniamy odwołanie na personName (zamiast person.name ze scope kontrolera)
            // @ oznacza, że chcemy uzyskać tekst, mamy one-way binding
            personName: "@",

            // lub
            //personNameSpecial: "@personName"

            personAddress: "@"
        }
        */
        // wersja dla =
        // w search-result przekazujemy cały obiekt, nie potrzebujemy tam interpolacji
        // do tego mamy two-way binding za pomocą =
        // dzięki = możemy przekazać obiekt
        // zmiana w searchresult na personObject.name
        scope: {
            // zmieniając dane w modelu kontrolera możemy wywołać przeładowanie dyrektywy i inne dziwne sytuacje
            personObject: "="
        }
    };
});
