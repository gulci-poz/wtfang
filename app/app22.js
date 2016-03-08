var myApp = angular.module("myApp", []);

// jeśli mamy w HTML zagnieżdżone kontrolery, to angular poszukuje zmiennej w $scope zaczynając od bieżącego kontrolera, jeśli jej nie znajdzie, to idzie wyżej
// można odwołać się do zmiennej ze $scope z wyższego poziomu za pomocą właściwości $parent
// można też eksponować zmienne za pomocą obiektu na danym $scope i odwoływać się explicite za pomocą tego obiektu, jest to bardziej przejrzyste niż używanie $parent

myApp.controller("parent1Controller", ["$scope", function ($scope) {
    $scope.parent1vm = {};
    $scope.parent1vm.message = "Parent 1 Message!";
}]);

myApp.controller("child1Controller", ["$scope", function ($scope) {
    $scope.child1vm = {};
    $scope.child1vm.message = "Child 1 Message!";
}]);

myApp.controller("parent2Controller", [function () {
    // mamy zmienną bezpośrednio na kontrolerze
    // w przypadku $scope - to child $scope jest zmienną na kontrolerze
    // ale mamy różnice w sposobie dostępu
    // do użycia $watch potrzebujemy $scope
    this.message = "Parent 2 Message!";
}]);

myApp.controller("child2Controller", [function () {
    this.message = "Child 2 Message!";
}]);

// AtScript - transpilowany język, z którym będzie współpracował angular2
// ma to być ścisły superzbiór TypeScript
