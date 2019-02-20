document.getElementById("button").onclick = function() {guessLetter()};

function guessLetter() {
    const wordToFound = ['B', 'O', 'N', 'J', 'O', 'U', 'R'];
    let essai = null; 
    var lettres = new Array;
    do {
        x = prompt("Entrez une lettre.");
        if(x.length === 1) {
            lettres.push(x);
            essai++;
            console.log(lettres);
            console.log(essai);
            document.getElementById("essai").innerHTML = essai;
         /* if (x = une lettre de l'array wordToFound.) {
                il met la lettre dans l'array lettres. [lettres.push(x)]


         }
            */
        }
        else {
            alert("Vous devez rentrer UNE lettre.");
        }
    }
    while (x!=="b") //array wordToFound = array lettre
    console.log(x);
    console.log(wordToFound);
}

/* 
Submit ne doit prendre qu'une lettre à la fois.
Il doit vérifier qu'il s'agit d'une lettre.

Ensuite il enregistre dans une array.

Les deux arrays sont triés par ordre alphabétique et converties en Uppercase pour comparer les lettres trouvées. 
*/