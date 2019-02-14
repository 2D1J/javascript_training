function calculIMC() {
    let kg = 0;
    let m = 0;
    let imc = 0;
    let x = null;

    kg = Number(prompt("Entrez votre poids."));
    m = Number(prompt('Entrez votre taille. \n Au format "1.80" pour 1m80'));
    imc = kg / (m**2);
    x = (imc.toFixed(2));
    console.log(kg);
    console.log(m);
    console.log(m**2);
    console.log(imc);
    console.log(x);
    
    if (x < 16.5) {alert("Vous êtes trop maigre.");}
    if (x >= 18.5 && x < 18.5) {alert("Vous êtes maigre.")};
    if (x >= 25 && x < 30) {alert("Vous êtes en surpoids.")};
    if (x >= 30 && x < 35) {alert("Vous êtes obèse.")};
    if (x >= 35 && x < 40) {alert("Vous êtes en obésité sévère.")}
    if (x >= 40) {"Vous êtes en obésité morbide."};
}
    /*


    if (16.5 <= x < 18.5) {alert("Vous êtes maigre.")};
    if (18.5 < x < 25) {alert("Vous êtes normal.")};
    if (25 <= x < 30) {alert("Vous êtes en surpoids.")};
    if (30 <= x < 35) {alert("Vous êtes obèse.")};
    if (35 <= x < 40) {alert("Vous êtes en obésité sévère.")}
    if (x >= 40) {"Vous êtes en obésité morbide."};

*/

/*
Exercice 13 - Calcul de l'IMC

L'IMC ou Indice de Masse Corporelle est utilisé pour évaluer les risques sur la santé liés au surpoids chez l'adulte. Il se calcule en divisant le poids exprimé en kg par le carré de la taille exprimée en mètre.

Par exemple :
- Une personne pesant 95 kg et mesurant 1,81 m a un IMC de 95/(1.81*1.81)= environ 29,0
- Une personne pesant 48 kg et mesurant 1,69 m a un IMC de 48/(1.69*1.69)= environ 16,8
- Une personne pesant 61 kg et mesurant 1,57 m a un IMC de 61/(1.57*1.57)= environ 24,7

En fonction de la valeur obtenue, on peut estimer la corpulence de la manière suivante :

- moins de 16,5 : dénutrition ou famine
- 16,5 <= IMC < 18,5 : maigreur
- 18,5 <= IMC < 25 : corpulence normale
- 25 <= IMC < 30 : surpoids
- 30 <= IMC < 35 : obésité modérée
- 35 <= IMC < 40 : obésité sévère
- plus de 40 : obésité morbide

Créer un bouton. Au click de ce bouton, lancer la fonction calculIMC.

Cette fonction va demander le poids et la taille, calculer l'IMC, ensuite l'afficher avec 2 décimales et enfin afficher un message disant dans quelle catégorie de corpulence on se situe.
*/