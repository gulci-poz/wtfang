// jeśli mamy oficjalny moduł angulara, to jego nazwa jest poprzedzona przedrostkiem "ng"; to również jest DI, DI całego modułu

// musimy pamiętać o tagu script dla każdego modułu

// custom attributes w angular to dyrektywy
// ng-model dodaje zmienną do listy Watchers (app11.js)

// angular-messages oferuje np. walidację formularzy

var myApp = angular.module("myApp", ["ngMessages", "ngResource"]);

myApp.controller("mainController", function ($resource) {

    console.log($resource);

});
