let character = {
    name : "Joshua",
    age : 24,
    items_to_give : ["bic", "voiture", "fourchette"],
    giveItem : function(){
        let i = Math.floor(Math.random() * (2 - 0 +1)) + 0;
        console.log(character.items_to_give[i]);
    }
};

for(let key in character){ // boucle
	console.log(typeof key); // affiche le type de key ici String
	console.log( key ) // affiche chaque clé de mon objet ("color", "feets",...)
	console.log( character[key] ) // affiche chaque valeur ("#FF0000", 4,...)
}

character.giveItem();



/*

* name (string)

* age (numero)

* items_to_give (tableau)

* afficher chaque information sur une ligne séparés dans la console (for in)

* faire une fonction "giveItem" qui permet au PNJ de donner un objet aléatoirement
*/