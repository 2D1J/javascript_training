document.getElementById("button").addEventListener("click", justePrix);

function justePrix() {
    let essai = 0;
    let min = Number(20);
    let max = Number(80);
    let testvar = 55;
    let msg = null;
    let random = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(random);

    do {
        essai++
        x = Number(prompt("Entrez un nombre"));
        if (x < random) {
            alert("Nombre trop petit. \n" + "Nombres d'essai " + essai);
        }
        else if (x > random) {
            alert("Nombre trop grand. \n" + "Nombres d'essai " + essai)
        }
        else {}
        console.log(essai);
    }
    while (x !== random)
    let conf = confirm("Le Nombre était "+ random + ". \n" + "Vous l'avez trouvé en " + essai + " coups. \n Souhaitez-vous rejouer?");
    if (conf == true) {
        justePrix();
    }
    else {
        return;
    }  
}