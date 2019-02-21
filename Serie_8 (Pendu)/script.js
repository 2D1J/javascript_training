document.getElementById("button").onclick = function() {guessLetter()};
var foundLetter =  ['_','_','_','_','_','_','_'];
var word = foundLetter.join("");
document.getElementById("afficherlettre").innerHTML = word;


function guessLetter() {
    const wordToFound = ['B', 'O', 'N', 'J', 'O', 'U', 'R'];
    // var foundLetter =  []; //['_','_','_','_','_','_','_'];
    let essai = 0;
    document.getElementById("essai").innerHTML = essai;
    let x = null;
    do {
        x = prompt("Entrez une lettre.");
        x = x.toUpperCase();
        if(x.length === 1) {
            for (i = 0; i < wordToFound.length; i++) {
                cond = wordToFound[i].includes(x);
                console.log(cond);
                if (cond === true) {
                    foundLetter[i] = x;
                    document.getElementById("afficherlettre").innerHTML = foundLetter;
                }
                else {
                    essai++;
                    console.log("Loser count " + essai);
                    document.getElementById("essai").innerHTML = essai;
                } 
            }
            document.getElementById("afficherlettre").innerHTML = foundLetter.join("");
                // console.log (item);
                // console.log (item.includes(x));
        }
        else {
            alert("Vous devez rentrer UNE lettre.");
        }
    }
    while (wordToFound.toString() !== foundLetter.toString())
    console.log(wordToFound.toString());
     //array wordToFound = array lettre = > wordToFound.length !== foundLetter.length
    confirm("Vous avez trouvé le mot. \n Souhaitez-vous rejouer?");
    console.log();
        if (true) {
            alert("OK");
        }
        else {
            alert("Cancel");
        }

}


/* if (x = une lettre de l'array wordToFound.) {
                il met la lettre dans l'array foundLetter. [lettres.push(x)]
                search(lettre) 
                il va tier par ordre alphabétique (sort()) les lettres des deux tableaux 
                et si besoin les mettres en MAJ ou min. 
                if (wordToFound = foundletter [mêmes length et mêmes lettres) {
                    alert("Vous avez gagné").
                }
                else {
                    || rien ne se passe mais faut mettre le else.
                    Qui permettra de reboucler au-dessus.
                }
            else { essai++ => tentative ratées }
         }
            */