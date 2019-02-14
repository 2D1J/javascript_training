var addition = "";

function somme() {
    y = 0;
    for (i=0; i<=2; i++) {
        x = Number(prompt());
        y += x;
        console.log(y);
    }
    document.getElementById("text").innerHTML = y;
}

console.log(somme);


// Utilisation de la boucle for
/* Créer un bouton. Au click de ce bouton, lancer la fonction somme.
Cette fonction demande trois fois à l'utilisateur de saisir un nombre et affiche ensuite
la somme de ces trois nombres. */