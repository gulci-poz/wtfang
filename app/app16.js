var myApp = angular.module("myApp", ["ngRoute"]);

// wstrzykujemy $routeProvider do konfiguracji aplikacji
myApp.config(function ($routeProvider) {

    $routeProvider

        .when("/", {
            templateUrl: "pages/main.html",
            controller: "mainController"
        })

        // możemy skorzystać z tego samego szablonu i kontrolera co przy dopasowaniu wzorca

        .when("/second", {
            templateUrl: "pages/second.html",
            controller: "secondController"
        })

        // mamy dopasowanie wzorca
        // samo /second nie będzie już pasowało

        .when("/second/:num", {
            templateUrl: "pages/second.html",
            controller: "secondController"
        });

    // zamiast ng-controller dla każdego diva w html korzystamy z jednego diva z ng-view, w ten sposób ładujemy templates
    // do diva zostanie dodany kod html z szablonu (będzie wewnątrz diva z ng-view)
    // ciekawostka: możemy korzystać z szablonów w node (np. ejs) i podać ten wygenerowany kawałek kodu html jako szablon w angular, tu korzystamy z kolei z bindings i interpolacji

});

// tworzymy własny serwis
// nazwa zależności do kontrolera będzie u nas bez $ (taką nazwę daliśmy serwisowi)
// nie tracimy zmiennej serwisu po przejściu ze strony na stronę (szablony wewnątrz SPA), jesteśmy w tej samej przestrzeni pamięci JS, a serwis to singleton; przeładowanie strony powoduje załadowanie całego kodu JS na nowo
// dane możemy zachować (persist), np. za pomocą cookie, local storage, bazy danych
// mamy enkapsulację funkcjonalności pomiędzy kontrolerami

// factories (bardzo podobne do serwisów)
// providers (rzadko używane)

myApp.service("nameService", function () {

    var self = this;

    this.name = "John Doe";

    this.nameLength = function () {
        return self.name.length;
    };

});

myApp.controller("mainController", ["$scope", "$log", "nameService", function ($scope, $log, nameService) {

    $scope.name = "Main";

    // singleton - wzorzec w OOP
    // singleton - jedyna kopia obiektu, nie będzie więcej innych kopii
    // serwisy angulara są zaimplementowane jako singletony

    // ten sam obiekt $log jest wstrzyknięty do obu kontrolerów; oszczędność pamięci i współdzielenie obiektu między stronami (i kontrolerami)

    // wyjątkiem jest $scope
    // w pewnych sytuacjach tworzony jest child $scope, taką sytuacją jest przekazanie $scope do kontrolera, dlatego każdy kontroler ma swoją instancję (mamy zmienną name różną na obu kontrolerach)
    // każdy z child $scope dziedziczy z root $scope dołączonego do naszej aplikacji

    // serwisy, który mogą tworzyć użytkownicy będą singletonami

    $log.main = "Property from main";
    $log.log($log);

    $log.log(nameService.name);
    $log.log(nameService.nameLength());

}]);

myApp.controller("secondController", ["$scope", "$log", "$routeParams",
    function ($scope, $log, $routeParams) {

        $scope.name = "Second";

        // lub domyślna wartości dla urla /second
        $scope.num = $routeParams.num || 1;

        $log.second = "Property from second";
        $log.log($log);

    }
]);


/*
myApp.controller("mainController", ["$scope", "$location", "$log", function ($scope, $location, $log) {

    // zawartość hasha
    //$log.info($location.path());

    // mamy wrapper w postaci angular-route

}]);
*/
