var myApp = angular.module("myApp", []);

myApp.controller("mainController", ["$scope", "$filter", "$http", function ($scope, $filter, $http) {

    $scope.handle = "";

    $scope.lowercaseHandle = function () {
        return $filter("lowercase")($scope.handle);
    }

    $scope.characters = 5;

    // 1 - statyczna tablica
    /*
    $scope.rules = [

        { rulename: "Must be 5 characters" },
        { rulename: "Must not be used elsewhere" },
        { rulename: "Must be cool" }

    ];
    */

    // 2 - zapytanie do API przy użyciu obiektu XMLHttpRequest (obiekt stworzony przez Microsoft)
    // bez zmian w index.ejs

    var rulesRequest = new XMLHttpRequest();

    rulesRequest.onreadystatechange = function () {
        // mamy żądanie, którego realizacja się skończyła
        // mam api w node, w którym zwracam string JSON z obiektu tablicy

        if (rulesRequest.readyState == 4 && rulesRequest.status == 200) {
            // potrzebujemy kontekstu angulara do korzystania z serwisu $scope; $apply musimy dać wewnątrz warunku if, inaczej kod się wykona, ale angular będzie narzekał (error), że jeden $apply już się wykonuje

            $scope.$apply(function () {
                // parsuję string JSON do obiektu JS; łatwy dostęp w angular, bez zmian w index.ejs
                $scope.rules = JSON.parse(rulesRequest.responseText);
            });
        }
    };

    rulesRequest.open("GET", "http://localhost:3000/api/rules", true);
    rulesRequest.send();

    // mock na potrzeby następnego przykładu

    $scope.newRule = "A new Rule Placeholder";

    $scope.addRule = function () {
        console.log("Add Rule");
    };

}]);
