document.getElementById("button").onclick = function() {guessLetter()};
// const input = document.getElementById("letterbox");
// input.onfocus = function() {guessLetter()};
var foundLetter =  ['_','_','_','_','_','_','_'];
var word = foundLetter.join("");
document.getElementById("afficherlettre").innerHTML = word;

function guessLetter() {
    const wordToFound = ['B', 'O', 'N', 'J', 'O', 'U', 'R'];
    // let essai = 0;
    // document.getElementById("essai").innerHTML = essai;
    let x = null;
    console.log(x);
    do {
        // input.removeAttribute("value");
        x = prompt("Entrez une lettre.")
        // x = input.value;
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
                } 
            }
            document.getElementById("afficherlettre").innerHTML = foundLetter.join("");
        }
        else {
            alert("Vous devez rentrer UNE lettre.");
        }
    }
    while (wordToFound.toString() !== foundLetter.toString())
    confirmation = confirm("Vous avez trouvé le mot. \n Souhaitez-vous rejouer?");
    if (confirmation == true) {
        foundLetter =  ['_','_','_','_','_','_','_'];
        document.getElementById("afficherlettre").innerHTML = foundLetter.join("");
    }
    else {
        alert("Ok. Casses toi.");
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