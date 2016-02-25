var myApp = angular.module("myApp", []);

// framework angular definiuje obiekt $scope, to również service angulara (the service object), nazwy services zaczynają się od $
// $scope pośredniczy między widokiem a kontrolerem, będąc nośnikiem dla danych (dla bindowania)
// tutaj ma miejsce DI obiektu $scope

myApp.controller("mainController", function ($scope) {

    // do obiektu $scope można dodać zmienną lub funkcję
    $scope.name = "gulci";

    $scope.getName = function () {
        return this.name;
    };

    console.log($scope.getName());
    console.log($scope);

});
