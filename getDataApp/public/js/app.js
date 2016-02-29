var myApp = angular.module("myApp", []);

myApp.controller("mainController", ["$scope", "$filter", "$http", function ($scope, $filter, $http) {

    $scope.handle = "";

    $scope.lowercaseHandle = function () {
        return $filter("lowercase")($scope.handle);
    }

    $scope.characters = 5;

    // 3 - zapytanie do API przy użyciu serwisu $http
    // wiele frameworków oferuje wrapper na obiekt XMLHttpRequest, w tym jQuery (ajax) i angular ($http)
    // bez zmian w index.ejs

    // API mamy pod tym samym adresem co aplikacja, nie potrzebujemy pełnej ścieżki
    $http.get("/api/rules")
        .success(function (result) {
            $scope.rules = result;
        })
        // jakiekolwiek dane z error i status HTTP
        .error(function (data, status) {
            console.log(data);
        });

    $scope.newRule = "";

    $scope.addRule = function () {
        //
        // todo - muszę dodać post w node
        // API zwraca uzupełnioną tablicę
        //

        // wysyłamy obiekt JS (nie string JSON)
        $http.post("/api/addRule", { newRule: $scope.newRule })
            .success(function (result) {
                $scope.rules = result;
                $scope.newRule = "";
            })
            .error(function (data, status) {
                console.log(data);
            });

    };

}]);
