// tylko zmienna zawierająca moduł aplikacji będzie w globalnej przestrzeni nazw
// mamy obiekt angular i metodę module, jej argumenty to nazwa aplikacji i tablica z zależnościami (innymi modułami, np. oficjalnymi modułami angulara)
// ng-app: musimy określić, która część widoku (HTML) będzie kontrolowana przez aplikację

var myApp = angular.module("myApp", []);

// kontroler (view-model) dla widoku (HTML) części aplikacji myApp (div z tagiem ng-controller mainController)
// tutaj będzie można definiować bindowanie danych, o sam proces bindowania zadba angular
// wiążemy widok HTML z kodem JS, który go kontroluje (po nazwie)

myApp.controller("mainController", function () {
    // tutaj będziemy mieli model danych wykorzystywany w widoku
});
