var myApp = angular.module("myApp", []);

// dyrektywy - instrukcja dla angulara, żeby dokonał manipulacji kawałka DOM, np. dodanie klasy, ukrycie elementu, utworzenie czegoś
// oznajmiamy, kierujemy (to direct), że coś ma się zmienić w DOM

myApp.controller("mainController", ["$scope", function ($scope) {

    // ng-model - binding konkretnej zmiennej ze $scope z elementem widoku (DOM), bez pisania $scope
    // w polach input zmienną ze $scope uzyskamy za pośrednictwem ng-model, w nieedytowalnych polach wystarczy binding {{}}, bez użycia ng-model

    // jeśli mamy zmienną na kontrolerze (a nie w $scope), to we wszystkich polach trzeba użyć ng-model i "zaliasowanego" kontrolera

    // widok jest wiązany z modelem za pomocą dyrektywy
    // dyrektywa ~ event listener (gulci's aside)
    // obecność ng-model (i {{}} również) sprawia, że coś wyrzuci zdarzenie i bindingi będą nasłuchiwać tego zdarzenia (np. zmiana zawartości zmiennej)

    // two-way binding między widokiem i modelem (za pomocą ng-model)
    // interpolacja {{}} to też binding (ale nie two-way)

    $scope.handle = "";

}]);

// 7min
