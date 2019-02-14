document.getElementById("image1").onmouseover = function() {imageHover()}
document.getElementById("image1").onmouseleave = function() {imageLeave()}

function imageHover() {
    let image = document.getElementById("image1");
    image.src = "images/image1_2.jpg";
    return;
}

function imageLeave() {
    let image = document.getElementById("image1");
    image.src = "images/image1.jpg";   
}

/* 
Exercice 1
Dans le fichier HTML fourni, changer l'image au survol de celle-ci par la deuxième.
*/