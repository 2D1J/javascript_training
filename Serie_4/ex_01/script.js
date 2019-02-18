document.getElementById("image1").onmouseover = function() {hoverImage()};
document.getElementById("image1").onmouseleave = function () {leaveImage()};

function hoverImage() {
    document.getElementById("image1").style.border = "red solid 3px";
}

function leaveImage() {
    document.getElementById("image1").style.border = "";
}


/* IMPORTANT Toutes les ressources aux exercices seront fournies quand cela sera nécessaire.
Pour la sécurité de votre code, à chaque formulaire, verifiez que ce qui est saisi correspond à ce qui est attendu.

Exercice 1

Dans le fichier HTML fourni, au survol de l'image ajouter une bordure de 3px rouge et la retirer quand la souris ne la survole plus. */