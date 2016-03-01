var myApp = angular.module("myApp", ["ngRoute"]);

// wstrzykujemy $routeProvider do konfiguracji aplikacji
myApp.config(function ($routeProvider) {

    $routeProvider

        .when("/", {
            templateUrl: "pages/main.html",
            controller: "mainController"
        })

        .when("/second", {
            templateUrl: "pages/second.html",
            controller: "secondController"
        });

    // zamiast ng-controller dla każdego diva w html korzystamy z jednego diva z ng-view, w ten sposób ładujemy templates
    // do diva zostanie dodany kod html z szablonu (będzie wewnątrz diva z ng-view)
    // ciekawostka: możemy korzystać z szablonów w node (np. ejs) i podać ten wygenerowany kawałek kodu html jako szablon w angular, tu korzystamy z kolei z bindings i interpolacji

});

myApp.controller("mainController", ["$scope", "$log", function ($scope, $log) {

    $scope.name = "Main";

}]);

myApp.controller("secondController", ["$scope", "$log",
    function ($scope, $log) {

        $scope.name = "Second";

    }
]);


/*
myApp.controller("mainController", ["$scope", "$location", "$log", function ($scope, $location, $log) {

    // zawartość hasha
    //$log.info($location.path());

    // mamy wrapper w postaci angular-route

}]);
*/
