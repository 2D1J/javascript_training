let mainCharacter = {
    name : "Arthur",
    level : 30,
    life : 10,
    weapon : {
        name : "Epee",
        damage : 20,
    },
    attack: function() {
        let dégats = (mainCharacter.level * mainCharacter.weapon.damage);
        console.log(mainCharacter.name + " attaque avec l'arme " + mainCharacter.weapon.name + "\n les dégats sont " + dégats + ".");
    }
}

mainCharacter.attack();




/*

crée un objet "mainCharacter" qui possède le propriétés suivantes :

* name (string)
* level (int)
* life (int)
* weapon (object)
* attack (function)

l'objet "weapon" possède les propriétés suivantes :

* name (string)
* damage (int)

Appeler la fonction "attack" du personnage
la fonction doit retourner : (le nom du personnage) attaque avec l'arme (nom de l'arme) les dégâts sont (niveau du personnage multiplié par le damage de l'arme)

*/