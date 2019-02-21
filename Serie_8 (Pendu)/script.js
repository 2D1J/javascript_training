document.getElementById("button").onclick = function() {guessLetter()};
var foundLetter = ['_','_','_','_','_','_','_'];
document.getElementById("afficherlettre").innerHTML = foundLetter;

function guessLetter() {
    const wordToFound = ['B', 'O', 'N', 'J', 'O', 'U', 'R'];
    let essai = null;
    let x = null;
    do {
        x = prompt("Entrez une lettre.");
        x = x.toUpperCase();
        if(x.length === 1) {
            essai++;
            document.getElementById("essai").innerHTML = essai;
            // wordToFound.forEach(item => {
                // item.include(x);
               // }
            for (i = 0; i < wordToFound.length; i++) { 
                console.log(i);
                console.log(wordToFound[i]);
                // console.log(wordToFound[i].includes(x));
                cond = wordToFound[i].includes(x);
                console.log(cond);
                if (cond === true) {
                    alert("test");
                    //foundLetter[i]= x;
                    // console.log(foundLetter);
                }
                else {

                } 
            }
                // console.log (item);
                // console.log (item.includes(x));
        }
        else {
            alert("Vous devez rentrer UNE lettre.");
        }
    }
    while (x!=="b") //array wordToFound = array lettre
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