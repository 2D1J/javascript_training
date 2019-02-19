document.getElementById("button").onclick = function() {guessLetter()};

function guessLetter() {
    const wordToFound = ['B', 'O', 'N', 'J', 'O', 'U', 'R'];
    let essai = null; 
    do {
        var lettres = [];
        x = prompt("Entrez une lettre.");
        if(x.length === 1) {
            alert("C'est bien une lettre.");
            lettres.push(x);
            console.log(lettres);
        }
        else {
            alert("Plus d'une lettre.");
        }
    }
    while (x!=="b")
    console.log(x);
    console.log(wordToFound);
}

/* 
Submit ne doit prendre qu'une lettre à la fois.
Il doit vérifier qu'il s'agit d'une lettre.

Ensuite il enregistre dans une array.

Les deux arrays sont triés par ordre alphabétique et converties en Uppercase pour comparer les lettres trouvées. 
*/