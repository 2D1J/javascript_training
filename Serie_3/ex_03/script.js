document.getElementById("nom").onkeydown = function() {keyDown()};

function keyDown() {
    let champ = document.getElementById("nom").value;
    console.log(champ);
    alert(champ);
}


/* Exercice 3

Dans le fichier HTML fourni, afficher une boite de dialogue avec la valeur du champ dès que l'on appuie sur le clavier.
*/