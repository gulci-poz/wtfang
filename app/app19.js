var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(function ($routeProvider) {

    $routeProvider

        .when("/", {
            templateUrl: "pages/main4.html",
            controller: "mainController"
        })

        .when("/second", {
            templateUrl: "pages/second4.html",
            controller: "secondController"
        });

});

myApp.controller("mainController", ["$scope", "$log",
    function ($scope, $log) {

        $scope.person = {
            name: "John Doe",
            address: "555 Main St.",
            city: "New York",
            state: "NY",
            zip: "11111"
        };

        // na potrzeby repeated directive
        $scope.people = [
            {
                name: "John Doe",
                address: "555 Main St.",
                city: "New York",
                state: "NY",
                zip: "11111"
            },
            {
                name: "Jane Doe",
                address: "333 Second St.",
                city: "Buffalo",
                state: "NY",
                zip: "22222"
            },
            {
                name: "George Doe",
                address: "111 Third St.",
                city: "Miami",
                state: "FL",
                zip: "33333"
            }
        ];

        $scope.formattedAddress = function (person) {
            return person.address + ", " + person.city + ", " + person.state + " " + person.zip;
        }

}]);

myApp.controller("secondController", ["$scope", "$log",
    function ($scope, $log) {



    }
]);

myApp.directive("searchResultFun", function () {

    return {
        restrict: "ACEM",
        templateUrl: "directives/searchresultfun.html",
        replace: true,
        scope: {
            personObject: "=",

            // dodajemy funkcję ze scope kontrolera - &
            // w searchresult2 przekazujemy mapping object
            // funkcja może dokonywać zmian na scope kontrolera, oznacza to, że z poziomu dyrektywy możemy zmienić nie wprost zawartość modelu kontrolera
            formattedAddressFunction: "&"
        },
        compile: function (elem, attrs) {
            console.log("Compiling...");
            // mamy dostęp do htmla, który definiuje widok dla dyrektywy
            //console.log(elem.html());
            console.log(elem);

            // compile mamy tylko raz - widok definiujemy raz
            // widok możemy tutaj zmienić w locie, przed jego użyciem w aplikacji
            // rzadko używany; najczęstsze jest użycie post-linking

            // np. usuwam klasę, tutaj: klasę bootstrap z a
            //elem.removeAttr("class");
            //console.log(elem);

            // zwraca linking properties pre i post
            // dla każdej instancji dyrektywy mamy osobny scope
            // mamy możliwość zmiany htmla przy tworzeniu każdej instancji
            return {
                // parametry dla html wygenerowanego przez utworzenie instancji dyrektywy

                /*
                pre: function (scope, elements, attrs) {
                    console.log("Pre-linking...");
                    console.log(elements.html());
                },
                */

                post: function (scope, elements, attrs) {
                    console.log("Post-linking...");
                    console.log(scope);
                    //console.log(elements.html());

                    if (scope.personObject.name === "Jane Doe") {
                        elements.removeAttr("class");
                    }

                    console.log(elements);
                }
            }

            // możemy zagnieżdżać dyrektywy, najpierw jest robiony pre-linking po kolei dla każdej dyrektywy, a potem w odwrotnej kolejności post-linking
            // post-linking jest bezpieczniejszy, ponieważ już wiemy co jest zawartością dyrektywy; w dokumentacji odradzają używanie pre-linking
            // compile ~ initialize
            // post ~ onbind
        }
    };
});
