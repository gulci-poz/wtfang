var myApp = angular.module('myApp', []);

// tworzymy nową zmienną na $rootScope
myApp.run(function ($rootScope) {
    $rootScope.test = 10;
});

// możemy wstrzyknąć $rootScope jak każdą inną usługę
myApp.controller("ctrl1", ["$scope", "$rootScope", function($scope, $rootScope) {
    // $scope dziedziczy z $rootScope, mamy więc zmienną test na child $scope
    // test na $rootScope pozostaje niezmieniony przy zmianie child $scope

    $scope.changeChild = function(newVal) {
        $scope.test = newVal;
    };

    // w HTML można się odwoływać do test, ale dla jednorodności kodu dodaję tę metodę
    $scope.getChild = function () {
        return $scope.test;
    }

    $scope.changeOrig = function(newVal) {
        $rootScope.test = newVal;
    };

    $scope.getOrig = function() {
        return $rootScope.test;
    };

    $scope.track = $scope.getChild().toString();
    $scope.track += " " + $scope.getOrig().toString();

    $scope.changeChild(20);
    $scope.track += " " + $scope.getChild().toString();
    $scope.track += " " + $scope.getOrig().toString();

    // jeśli w tym miejscu zmienimy $rootScope, to zmiany nie dotkną już istniejącego child $scope
    $scope.changeOrig(30);
    $scope.track += " " + $scope.getChild().toString();
    $scope.track += " " + $scope.getOrig().toString();
}]);

/*
<!-- zmiany w child $scope i $rootScope mogą wystąpić przed wypisaniem na ekranie poprzedniej wartości -->

$rootScope: {{ getOrig() }}
<br />
child $scope: {{ getChild() }}
<br />

<!-- child $scope change in progress {{ changeChild(20) }} -->

<br />
child $scope afer change: {{ getChild() }}
<br />
$rootScope after child $scope change: {{ getOrig() }}
<br />

<!-- $rootScope change in progress {{ changeOrig(30) }} -->
*/
