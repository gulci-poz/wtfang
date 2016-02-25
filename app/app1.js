// koncept AngularJS
// automatyczna zmiana widoku (HTML, DOM) po zmianie danych (model, np. dane z bazy danych, JSON, obiekty JS, zmienne) - binding
// sterowanie zmianami (lub powiązanie zmian - tie, bind): kontroler lub view-model (angular - model, view, whatever - MV*)

// HTML Custom Attributes
// nieznane w standardzie atrybuty zostaną pominięte podczas renderowania w przeglądarce
// oficjalnie w html5 mamy data-reply
// w angular mamy ng-reply
// angular dopuszcza też data-ng-reply (zgodne z html5)

console.log($("h1").attr("ng-reply"));

// dependency injection - przekazanie funkcji obiektu
// angular wykorzystuje DI (kontrolery i inne instancje)

var Person = function (firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}

/*
function logPerson () {
    // zmienna john jest zależnością funkcji logPerson (funkcja jest zależna od zmiennej)
    // w razie jakiejkolwiek zmiany w obiekcie john, będzie trzeba dokonać zmian wewnątrz funkcji logPerson
    var john = new Person("John", "Doe");
    console.log(john);
}

logPerson();
*/

// podejście z DI

function logPerson (person) {
    console.log(person);
}

// funkcja logPerson nie jest zależna od obiektu john
// ten obiekt może być stworzony w inny sposób, np. za pomocą danych wyciągniętych z bazy dancyh
// funkcji logPerson to nie interesuje, zmiany w jej ciele nie są konieczne
// wstrzykujemy zależność - przekazujemy obiekt

var john = new Person("John", "Doe")
logPerson(john);
