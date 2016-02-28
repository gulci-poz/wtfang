var myApp = angular.module("myApp", []);

myApp.controller("mainController", ["$scope", "$filter", function ($scope, $filter) {

    $scope.handle = "";

    $scope.lowercaseHandle = function () {
        return $filter("lowercase")($scope.handle);
    }

    $scope.characters = 5;

    // ng-if - dodaje/usuwa kawałek DOM, na którym leży, w zależności od spełnienia warunku wyrażonego w JS (pozostaje komentarz w kodzie HTML)

    // ng-show i ng-hide - podobnie jak wyżej, określamy warunek ukrycia lub pokazania; element DOM pozostaje na stronie, dodawana jest klasa ng-hide, do której aplikuje styl CSS pokazujący/ukrywający element DOM

    // ng-class - dodanie klasy do elementu DOM w zależności od spełnienia warunku, jest to kod JS, podajemy w nim obiekt JSON (nie JS), zawierający pary nazwa klasy - warunek (warunek bez jakichkolwiek cudzysłowów); możemy tutaj zagnieździć divy z ng-show, żeby pokazywać komunikat odpowiedni do klasy (koloru) aleru

    // przy interpolacji lub ng-bind angular dodaje klasę ng-binding

    // przy ng-model na input angular dodaje różne klasy, które się zmieniają w zależności od zawartości wejścia

    // ng-scope pojawia się na nadrzędnym elemencie, który jest związany z kontrolerem; dokumentacja mówi (1.5.0), że ma się pokazać na każdym elemencie, gdzie jest dołączony #scope; w innym miejscu piszą, że pojawia się na elementach, na których jest zdefiniowany nowy $scope

    // klasy angulara, możemy zdefiniować dla nich style
    // https://code.angularjs.org/1.5.0/docs/guide/css-styling

    $scope.rules = [

        { rulename: "Must be 5 characters" },
        { rulename: "Must not be used elsewhere" },
        { rulename: "Must be cool" }

    ];

}]);

// 14:50
