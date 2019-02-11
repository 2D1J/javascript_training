function validation() {
    pointure = Number(document.getElementById("pointure").value);
    annee = Number(document.getElementById("annee").value);
    resultat = pointure*2;
    console.log(resultat);
    resultat += 5;
    console.log(resultat);
    resultat *= 50;
    console.log(resultat);
    resultat -= annee;
    console.log(resultat);
    resultat += 1766;
    alert(resultat);
}