function jourDeLaSemaine() {
    jour = new Date();
    console.log(jour)
    Jour = jour.getDay();
    console.log(Jour)
    switch (Jour) {
        case 1:
            return alert("Lundi")
            break;
        case 2:
            return alert("Mardi");
            break;
        case 3:
            return alert("Mercredi");
            break;
        case 4:
            return alert("Jeudi");
            break;
        case 5:
            return alert("Vendredi");
            break;
        case 6:
            return alert("Samedi");
            break;
        default:
            return alert("Sunday is a lie.");
            break;
    }
}
