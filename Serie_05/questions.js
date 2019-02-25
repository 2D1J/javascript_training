/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
var tailleString = function (texte) {
    return texte.length;
}
var remplaceECar = function (texte) {
    let a = texte.indexOf("e");
    let text =  texte.substr(" ", a) + " " +texte.substr(a + 1 , texte.length);
    return text;
}
var concatString = function (texte1, texte2) {
    return texte1.concat(texte2);
}
var afficherCar5 = function (texte) {
    return texte.slice(1,2);
}
var afficher9Car = function (texte) {
    return texte.slice(0,9);
}
var majusculeString = function (texte) {
    return texte.toUpperCase();
}
var minusculeString = function (texte) {
    return texte.toLowerCase();
}
var SupprEspaceString = function (texte) {
    return texte.trim();
}
var IsString = function (texte) {
    console.log(typeof(texte));
    if (typeof(texte) === 'string') {
        return true;
    }
    else {
        return false;
    }
}
var AfficherExtensionString = function (texte) {
    return texte.substring(texte.lastIndexOf(".")+1);
}
var NombreEspaceString = function (texte) {
    spaceCount = (texte.split(" ").length - 1);
    return spaceCount;
    console.log(spaceCount);
}
var InverseString = function (texte) {
    return texte.split('').reverse().join('');
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */

var calculPuissance = function (x, y) {
    return x**y;
}
var valeurAbsolue = function (nombre) {
    return Math.abs(nombre);
}
var valeurAbsolueArray = function (array) {
    /*array.forEach(function(element) {
        console.log(Math.abs(element));
    });
    */ // Calcule les éléments du tableau (array) un par un en les sortant.
    for (let i = 0; i < array.length; i++) {
    array[i] = Math.abs(array[i]);
    }
    // console.log(array);
    return array;
}
var sufaceCercle = function (rayon) {
    return Math.round(Math.PI*(rayon**2));
}
var hypothenuse = function (ab, ac) {
    return Math.hypot(ab, ac);
}
var calculIMC = function (poids, taille) {
    return Number((poids/taille**2).toFixed(2));
}


