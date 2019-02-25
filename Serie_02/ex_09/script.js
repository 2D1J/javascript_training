function testWhile() {
    test = -1;
    while (test < 0) {
        mot = prompt("blablabla");
        test = mot.search("p");
    }
    alert(mot);
}

console.log(testWhile);

/* Créer un bouton. Au click de ce bouton, lancer la fonction testWhile. 
Cette fonction demande à l'utilisateur de saisir une chaîne de caractères contenant la lettre p, et le redemande tant que l'utilisateur ne l'a pas fait. 
Il affiche ensuite la chaîne saisie entre guillemets. */