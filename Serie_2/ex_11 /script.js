function calculMoyenne() {
    let total = 0;
    let essai = 0;

    do {
        nbre_entier = prompt("Entrez un nombre entier");
        if(Number.isInteger(Number(nbre_entier))){
            console.log("test");
            essai++;
            total += Number(nbre_entier);
            console.log(total);   
        }
        else{
            console.log("test2")
        }
    }
    
    while (nbre_entier >= 0)


    if(nbre_entier< 0){
        console.log(essai);
        let moyenne = total/essai;
        console.log(moyenne);

    }

    // console.log("essai = " + essai);
    
    
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