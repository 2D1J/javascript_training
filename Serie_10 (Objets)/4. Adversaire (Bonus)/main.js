character = {
    name : "Arthur",
    level : 30,
    life : 10,
    weapon : {
        name : "Epee",
        damage : 15,
    },
    attack : function() {

    },
    receiveDamage : function() {

    },
}
/*
* crée un objet "character" qui possède le propriétés suivantes :
* name (string)
* level (int)
* life (int)
* weapon (object)
* attack (function)
* receiveDamage (function)

* l'objet "weapon" possède les propriétés suivantes :

* name (string)
* damage (int)

* crée un objet "opponentCharacter" a partir de character

* crée un objet "mainCharacter" a partir de character

* Appeler la fonction "attack" de "mainCharacter" afin qu'il attaque "opponentCharacter"

* la fonction doit afficher dans la console (ligne par lige)
* (le nom du personnage) attaque (nom de l'adversaire)
* avec l'arme (nom de l'arme)
* et lui inflige (niveau du personnage multiplié par le damage de l'arme) de dégats
* (nom de l'adversaire) a maintenant (life de l'adversaire) de vie
*/