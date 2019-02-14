function calculMoyenne() {
    let nbre_entier = 0;
    let nbre_valeur = null;
    let somme = null;
    let moyenne = null;
    
    while() {
        do {
            nbre_entier = Number(prompt("Entrez un nombre entier (do)"));
            if (nbre_entier - Math.floor(nbre_entier) !== 0) {
                alert("Réessayez.");
                break;
            }
        }
        while (nbre_entier >= 0) {
            nbre_entier = Number(prompt("Entrez un nombre entier (while)"));
            nbre_valeur++
            console.log(nbre_valeur);
            somme += nbre_entier;
            console.log(somme);
            if (nbre_entier = 0) {
            }
        }
        console.log("La moyenne est de " + (moyenne = somme / nbre_valeur));
        console.log("Vous avez entré " + nbre_valeur + " nombres");
    }
}
/* Créer un bouton. Au click de ce bouton, lancer la fonction calculMoyenne.

    Cette fonction va calculer la moyenne des nombres entrés au clavier :

        demande à l'utilisateur d'entrer un nombre entier.

        si l'utilisateur entre autre chose qu'un nombre entier, un message d'alerte signale l'erreur et ensuite, la fonction redemande à l'utilisateur d'entrer un nombre entier.

        tant que le nombre entré est positif ou nul, la fonction mémorise ce nombre et l'additionne aux autres nombres précédemment entrés.

        si le nombre est négatif, alors la fonction calcule la moyenne de tous les nombres entrés en divisant la somme totale par le nombre de valeurs entrées.

        la fonction affiche le nombre de valeurs entrées
        la fonction affiche la moyenne
 */