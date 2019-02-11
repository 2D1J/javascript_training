function surfaceRectangle() {
    longueur = document.getElementById("longueur").value;
    largeur = document.getElementById("largeur").value;
    resultat = longueur*largeur;
    document.getElementById("surfaceCalc").innerHTML = resultat;
}

function periRectangle() {
    longueur = Number(document.getElementById("longueur").value);
    largeur = Number(document.getElementById("largeur").value);
    resultat = 2*(longueur+largeur);
    document.getElementById("perimetreCalc").innerHTML = resultat;
}