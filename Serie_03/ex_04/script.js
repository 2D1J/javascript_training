let btn = document.getElementsByName("button");
btn[0].addEventListener("click", raz);
let input = document.querySelectorAll("input");
console.log(input);

function raz() {
    let x = document.getElementsByTagName("input")
    for (var i = 0; i < x.length; i++) {
        x[i].removeAttribute('value');
    }
}

/*
Exercice 4

Dans le fichier HTML fourni, faire que le bouton RAZ efface les données des champs du formulaire.
------------------------------------

Le .getElementsByName va chercher toutes les balises/élements html portant le nom indiqué. Ensuite il crée un array. D'où le btn[0] par après. 

A noter que dans la console, sur le navigateur il est possible de voir de quel bouton il s'agit, dans le NodeList qui nous affiche la position dans le array.
*/