var myApp = angular.module('myApp', []);

// factories

myApp.factory("items", function() {
    var items = [];
    var itemsService = {};

    itemsService.add = function(item) {
        items.push(item);
    };

    itemsService.list = function() {
        return items;
    };

    return itemsService;
});

// fabrykę możemy wstrzykiwać
myApp.controller("ctrl1", ["$scope", "items", function ($scope, items) {
    items.add("element1");
    items.add("element2");
}]);

// fabryka, podobnie jak serwis, jest dostępna na wszystkich kontrolerach
myApp.controller("ctrl2", ["$scope", "items", function ($scope, items) {
    $scope.list = items.list();
}]);


// -> providers (config, $routeProvider, when)
