function faireChoix() {
    Choix = Number(prompt("Faites un choix"));
    switch (Choix) {
        case 1:
            return alert("1. Merci")
            break;
        case 2:
            return alert("2. Bonjour");
            break;
        case 3:
            return alert("3. Aurevoir");
            break;
        default:
            return alert("Pardon, que voulez-vous?")
            break;
    }
}