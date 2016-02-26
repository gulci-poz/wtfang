var myApp = angular.module("myApp", []);

myApp.controller("mainController", ["$scope", "$filter", function ($scope, $filter) {

    $scope.handle = "";

    $scope.lowercaseHandle = function () {
        return $filter("lowercase")($scope.handle);
    }

    // dodajemy własny watch-code dla konkretnej zmiennej
    // normalnie tego nie robimy
    // oczywiście działamy w Angular Context

    $scope.$watch("handle", function (newValue, oldValue) {

        console.info("handle changed");
        console.log("old value: " + oldValue);
        console.log("new value: " + newValue);

    });

    // setTimeout działa w JS asynchronicznie (nowy wątek)
    // nie zadziała w Angular Context
    // można użyć $scope.$apply
    // z jQuery też trzeba to robić

    setTimeout(function () {

        // dodajemy kod do Angular Context
        // angular w większości kodu opakowuje nasz kod w $apply
        $scope.$apply(function () {
            $scope.handle = "newTwitterHandle"
            console.log("$scope changed");
        });

    }, 3000);

}]);

// 14:30, $timeout (Watchers and Digest Loop)
