// kontrolery dla forecast i home
/////////////////////////////////

// w razie potrzeby każdy route, serwis, kontroler lub dyrektywa mogą być w osobnym pliku

weatherApp.controller("homeController", ["$scope", "$location", "cityService", function ($scope, $location, cityService) {

        $scope.city = cityService.city;

        $scope.$watch("city", function () {
            cityService.city = $scope.city;
        });

        // funkcja to obsługi formularza, dodana w ng-submit
        $scope.submit = function () {
            $location.path("/forecast");
        };

    }
]);

weatherApp.controller("forecastController", ["$scope", "$routeParams", "cityService", "weatherService", function ($scope, $routeParams, cityService, weatherService) {

        $scope.city = cityService.city;

        $scope.days = $routeParams.days || "2";

        $scope.weatherResult = weatherService.GetWeather($scope.city, $scope.days);

        $scope.convertToFahrenheit = function (degC) {
            return (32 + 9/5 * degC);
        };

        // Number.toFixed()
        // degree symbol: &#176;

        $scope.roundTemp = function (temp) {
            return temp.toFixed(1);
        };

        // zamiast używać $filter tutaj możemy zrobić filtrowanie w HTML za pomocą dyrektyw; w dyrektywach możemy użyć filtra pipe |

        $scope.convertToDate = function (dt) {
            return new Date(dt * 1000);
        };

        // uzyskujemy nazwę dnia po polsku z wielkiej litery

        $scope.showDayPL = function (dt) {
            var dayNum = moment($scope.convertToDate(dt)).format("e");
            return (moment.localeData("pl")._weekdays[dayNum].substr(0, 1).toUpperCase() + moment.localeData("pl")._weekdays[dayNum].substr(1));
        }

    }
]);
