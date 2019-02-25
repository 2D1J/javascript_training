document.getElementById("image1").onmouseover = function() {imageHover()}
document.getElementById("image1").onmouseleave = function() {imageLeave()}

function imageHover() {
    let i = 1;
    // image.src = "images/image"+y+".jpg";
    for (i = 1; i>=5; i++) {
        let image = document.getElementById("image"+i);
        image.src = "images/image"+(i++)+".jpg";
        console.log(image);
        console.log(image.src);
    }
}

function imageLeave() {
    let image = document.getElementById("image1");
    image.src = "images/image1.jpg";   
}

/* 
Exercice 5

Dans le fichier HTML fourni, faire comme dans l'exercice 1 mais avec 5 images.
Bonus Ne faire qu'une seule fonction JavaScript pour cet exercice.

Ex 1 Rappel

Exercice 1

Dans le fichier HTML fourni, changer l'image au survol de celle-ci par la deuxième.
*/