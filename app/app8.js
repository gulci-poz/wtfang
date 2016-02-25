var myApp = angular.module("myApp", []);

// interpolacja - tworzenie stringa przez połączenie stringa i placeholdera

myApp.controller("mainController",
    ["$scope", "$timeout", function ($scope, $timeout) {

    // cokolwiek jest zdefiniowane na $scope, jest dostępne w części widoku objętej nadzorem kontrolera
    // interpolujemy za pomocą {{}}
    // nie musimy pisać $scope
    // $scope zapewnia binding danych
    $scope.name = "gulci";

    // jeśli definiujemy dane bezpośrednio na kontrolerze, to w widoku mamy do nich dostęp po użyciu dyrektywy ng-model; w tym przypadku również mamy binding
    this.occupation = "web";

    // setTimeout() z JS opakowany kodem angular
    $timeout(function () {
        $scope.name = "Sebastian Gulczynski";
    }, 3000);

}]);

// gulci's aside (moja definicja)
// moduły - "spakietowany" kod JS, który eksponuje funkcjonalność za pomocą serwisów

// co tak naprawdę sprawia, że dane są bindowane? nie sam kontroler, nie ng-model, nie $scope; prawdopodobnie listenery
// przewaga $scope nad ng-model (lub na odwrót)?
