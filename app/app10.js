var tb = document.getElementById("name");

console.log(tb);

// event loop "wyrzuca" zdarzenia
// tutaj czekamy (nasłuchujemy) na wystąpienie zdarzenia i reagujemy na nie

tb.addEventListener("keypress", function (event) {
    console.log(String.fromCharCode(event.charCode) + " pressed");
});
