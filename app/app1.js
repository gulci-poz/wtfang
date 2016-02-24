// koncept AngularJS
// automatyczna zmiana widoku (HTML, DOM) po zmianie danych (model, np. dane z bazy danych, JSON, obiekty JS, zmienne) - binding
// sterowanie zmianami (lub powiązanie zmian - tie, bind): kontroler lub view-model (angular - model, view, whatever - MV*)

// HTML Custom Attributes
// nieznane w standardzie atrybuty zostaną pominięte podczas renderowania w przeglądarce
// oficjalnie w html5 mamy data-reply
// w angular mamy ng-reply
// angular dopuszcza też data-ng-reply (zgodne z html5)

console.log($("h1").attr("ng-reply"));
