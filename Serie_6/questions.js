var CreationTableauLangages = function () {
    var langages = ['Html', 'CSS', 'Java', 'PHP'];
    return langages;
}

var CreationTableauNombres = function () {
    var Nombres = [ 0, 1, 2, 3, 4, 5 ];
    return Nombres;
}

var RemplacementElement = function (langages) {
    langages[2] = "Javascript";
    return langages;
}

var AjoutElementLangages = function (langages) {
    langages.push('Ruby', 'Python');
    return langages;
}

var AjoutElementNombres = function (nombres) {
    nombres.unshift(-2, -1);
    return nombres;
}

var SuppressionPremierElement = function (langages) {
    langages.shift();
    return langages;
}

var SuppressionDernierElement = function (langages) {
    langages.pop();
    return langages;
}

var ConversionChaineTableau = function (reseaux_sociaux_chaine) {
    console.log("reseaux_sociaux_chaine = " + reseaux_sociaux_chaine);
    var reseaux_sociaux = reseaux_sociaux_chaine.split(',');
    console.log("reseaux_sociaux_chaine (après split) = " +reseaux_sociaux_chaine);
    console.log("array = " + reseaux_sociaux);
    return reseaux_sociaux;
}

var ConversionTableauChaine = function (langages) {
    langages_chaine = langages.toString();
    return langages_chaine;
}

var TriTableau = function (reseaux_sociaux) {
    reseaux_sociaux.sort();
    return reseaux_sociaux;
}

var InversionTableau = function (reseaux_sociaux){
    reseaux_sociaux.reverse();
    return reseaux_sociaux;
}
