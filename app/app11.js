var myApp = angular.module("myApp", []);

myApp.controller("mainController", ["$scope", function ($scope) {

// angular rozszerza event loop JS
// angular dodaje Angular Context, dotyczy on wszystkiego, co jest zbudowane zgodnie z architekturą angulara (również moduły trzecie)
// jeśli dodamy coś do $scope, to rozszerzona pętla będzie o tym wiedziała
// Angular Context zawiera listę Watchers; jeśli dodamy coś do (zmienną, funkcję) $scope i użyjemy tego w widoku za pomocą bindingu lub interpolacji, do listy zostaje dodany Watcher
// monitorowana jest stara wartość i nowa wartość zmiennej - za każdym razem, gdy ma miejsce zdarzenie, po wystąpieniu którego to zdarzenia wartość zmiennej może się zmienić
// czynności obserwacji i sprawdzania zmian są w wewnątrz Digest Loop, to osobna pętla angulara
// w jednym Digest Cycle wszystkie zmienne z listy Watchers są pytane o zmianę, następuje porównanie zmian; jeśli dana zmienna zmieni wartość, to wszystkie powiązane z nią miesca są uaktualniane (DOM - binding, interpolacja; również w kodzie, który może być dotknięty tą zmianą)
// uruchomiany jest kolejny cykl, żeby sprawdzić czy zmiana nie pociągnęła innych zmian, i tak aż do momentu, gdy wszystkie stare wartości są równe nowym
// ten proces zatrzymuje się, do momentu aż rozszerzona pętla zdarzeń nie wyrzuci kolejnego zdarzenia

}]);

// gulci's aside
// praktyczna różnica między deklarowaniem zmiennych i funkcji w $scope, a robieniem tego bezpośrednio w kontrolerze

// korzystając z serwisów dostajemy metodę przekazywania danych między kontrolerami (a zarazem szablonami), chociaż w przypadku $scope mamy do czynienia z osobnymi instancjami (child), które dziedziczą z root
