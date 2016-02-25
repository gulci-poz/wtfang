var myApp = angular.module("myApp", []);

myApp.controller("mainController", function ($scope, $log, $filter) {

    // $log to również serwis angulara, zostanie rozpoznany wśród argumentów i wstrzyknięty do kontrolera
    // kolejność serwisów jako parametrów nie ma znaczenia

    console.log($log);
    console.log($scope);

    // console.log jest dopasowany do architektury angulara

    $log.log("hello");
    $log.info("hello info");
    $log.warn("hello warning");
    $log.debug("hello debug");
    $log.error("hello error");

    $scope.name = "Sebastian Gulczynski";

    // $filter("uppercase") zwróci funkcję
    $scope.formattedname = $filter("uppercase")($scope.name);

    $log.info($scope.name);
    $log.info($scope.formattedname);

    // kontroler jest niezależny od implementacji serwisów, nie jest od nich zależny, wystarczy je wstrzyknąć; kod jest łatwiejszy do testowania

    // w pozostałych modułach angulara (np. angular-messages) dostępne są inne serwisy

});
