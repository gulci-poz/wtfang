// href="#bookmark" - identyfikator fragmentu
// sam anchor - element z takim id - nie musi istnieć na stronie
// dzięki temu w id fragmentu możemy wpisać dowolną nazwę, może to być np. ścieżka

window.addEventListener("hashchange", function () {
    // zdarzenie - zmiana hasha w żądaniu
    // można też wpisać hash w żądaniu w pasku adresu (fake URL)
    console.log("hash changed: " + window.location.hash);

    if (window.location.hash === "#bookmark/1") {
        console.log("page 1");
    }

    // nie potrzebujemy żadnych elementów <a></a>
    // z punktu widzenia JS - widzimy hash i możemy go używać do routingu
    // SPA - jedno żądanie HTTP, jedna strona; asynchroniczne żądania AJAX i routing z hashami, do tego Digest Loop i nasłuchiwanie zmian; uzupełnienie po stronie serwera - Web API
    // w SPA ściągamy dane, a nie za każdym razem cały HTML; nie ma mrugania
});
