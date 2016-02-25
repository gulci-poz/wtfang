var myApp = angular.module("myApp", []);

// minifikacja może zmienić nazwy zmiennych serwisów, aplikacja przestanie działać
// angular ma na to sposób, inny sposób wywołania controller, drugim argumentem będzie tablica, a nie funkcja
// pierwszymi elementami tablicy powinny być stringi zawierające nazwy argumentów przekazanych do funkcji kontrolera
// minifikacja zmieni nazwy argumentów przekazanych do funkcji, stringi pozostaną niezmienione (minifikator nigdy nie zmieni danych) i to wykorzysta injector angulara, kiedy zobaczy tablicę zamiast funkcji
// dobra praktyka: lepiej od razu definiować kontrolery z tablicą, uodparniamy się na minifikację

// przed minifikacją, stringi muszą odpowiadać argumentom w odpowiedniej kolejności, inaczej możemy dostać nieoczekiwane błędy (ale nie musimy)

/*
myApp.controller("mainController", ["$scope", "$log", function ($scope, $log) {

    $log.info($scope);

}]);
*/

//myApp.controller("mainController",["$scope","$log",function(o,n){n.info(o)}]);

// przypadek bez błędu

/*
myApp.controller("mainController", ["$scope", "$log", function ($log, $scope) {

    console.log($log);

}]);
*/

// chciałem wydrukować $log a dostałem $scope ale nie ma błędu
myApp.controller("mainController",["$scope","$log",function(o,l){console.log(o)}]);
