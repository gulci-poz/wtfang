// serwisy
//////////

weatherApp.service("cityService", function () {

    this.city = "Poznan";

});

// staramy się jak najwięcej funkcjonalności wyprowadzić poza kontrolery (związane z widokiem) do serwisów, żeby kod był dostępny dla różnych kontrolerów
// jeden serwis ~ jedno zadanie ~ jedna funkcjonalność

// tutaj wyprowadzamy do serwisu pozyskiwanie danych
// możemy robić DI do serwisu

weatherApp.service("weatherService", ["$resource", function ($resource) {

    this.GetWeather = function (city, days) {

        // $resource to wrapper na $http

        var weatherAPI =
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

        return weatherAPI.get({
            q: city,
            cnt: days,
            appid: "04eae95ad58ff3d6b45089b57a134b32",
            units: "metric"
        });
    };

}]);
