var tab = [-2, 1, 4];

function soustrait(x){
    if (x >= 2) {
        return x-2;
    }
    else {
        return("Nombre négatif!");
    }
}

function affiche() {
    alert(soustrait(tab[tab.length -1]));
    alert(soustrait(tab[0]));
}