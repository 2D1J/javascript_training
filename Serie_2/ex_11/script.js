function calculMoyenne() {
    let nbre_entier = Number(prompt("Entrez un nombre."))
    console.log(nbre_entier);
    if (nbre_entier - Math.floor(nbre_entier) == 0) {
        alert("C'est un nombre entier.")
        while() {
            nbre_entier;
            let add += nbre_entier;
        }
    }
    else {
        alert("Bad Choice MTHFCK")
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