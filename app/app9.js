var myApp = angular.module("myApp", []);

// dyrektywy - instrukcja dla angulara, żeby dokonał manipulacji kawałka DOM, np. dodanie klasy, ukrycie elementu, utworzenie czegoś
// oznajmiamy, kierujemy (to direct), że coś ma się zmienić w DOM

myApp.controller("mainController", ["$scope", "$filter", function ($scope, $filter) {

    // ng-model - binding konkretnej zmiennej ze $scope z elementem widoku (DOM), bez pisania $scope
    // w polach input zmienną ze $scope uzyskamy za pośrednictwem ng-model, w nieedytowalnych polach wystarczy binding {{}}, bez użycia ng-model

    // jeśli mamy zmienną na kontrolerze (a nie w $scope), to we wszystkich polach trzeba użyć ng-model i "zaliasowanego" kontrolera

    // widok jest wiązany z modelem za pomocą dyrektywy lub interpolacji
    // dyrektywa lub interpolacja - dodanie zmiennej do listy Watchers (patrz: app11 i wyjaśnienie rozszerzenia event loop)

    // two-way binding między widokiem i modelem (za pomocą ng-model)
    // interpolacja {{}} to też binding (ale nie two-way)

    $scope.handle = "";

    $scope.lowercaseHandle = function () {
        return $filter("lowercase")($scope.handle);
    }

    // zawartość {{}} jest interpretowana jako JS
    // funkcję w {{}} trzeba wywołać

}]);
