var myApp = angular.module("myApp", []);

myApp.controller("mainController", function ($scope) {

    // angular rozpozna $scope w argumentach, utworzy go i przekaże obiekt do funkcji kontrolera
    // inne services mogą być przekazane jako argumenty do kontrolera
    console.log($scope);

});

var searchPeople = function (firstName, lastName, height, age, occupation) {

    return "gulci";

}

console.log(searchPeople);
console.log(searchPeople());

var searchPeopleString = searchPeople.toString();
console.log(searchPeopleString);

// taki string można parsować
// na podstawie zawartości stringa można podejmować decyzje - tak właśnie robi angular; jeśli zobaczy gdzieś $scope, to przekaże ten obiekt - zrobi DI

// angular parsuje funkcję, żeby wyodrębnić argumenty i zwraca je w tablicy
// w przypadku znalezienia $scope zrobi DI
// taki proces ma miejsce w kontrolerze
console.log(angular.injector().annotate(searchPeople));
