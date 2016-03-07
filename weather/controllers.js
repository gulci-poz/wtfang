// kontrolery dla forecast i home
/////////////////////////////////

// w razie potrzeby każdy route, serwis, kontroler lub dyrektywa mogą być w osobnym pliku

weatherApp.controller("homeController", ["$scope", "cityService",
    function ($scope, cityService) {

        $scope.city = cityService.city;

        $scope.$watch("city", function () {
            cityService.city = $scope.city;
        });

    }
]);

weatherApp.controller("forecastController", ["$scope", "$resource", "$routeParams", "cityService", function ($scope, $resource, $routeParams, cityService) {

        $scope.city = cityService.city;

        $scope.days = $routeParams.days || "2";

        // $resource to wrapper na $http

        $scope.weatherAPI =
            $resource(
                "http://api.openweathermap.org/data/2.5/forecast/daily",
                {
                    callback: "JSON_CALLBACK"
                },
                {
                    get: {
                        method: "JSONP"
                    }
                }
            );

        // API:
        // http://openweathermap.org/forecast

        // mój klucz API:
        // 04eae95ad58ff3d6b45089b57a134b32

        // przykładowe zapytanie: http://api.openweathermap.org/data/2.5/forecast?q=Poznan&cnt=2&units=metric&appid=04eae95ad58ff3d6b45089b57a134b32

        $scope.weatherResult = $scope.weatherAPI.get({
            q: $scope.city,
            cnt: $scope.days,
            appid: "04eae95ad58ff3d6b45089b57a134b32",
            units: "metric"
        });

        //console.log($scope.weatherResult);

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
