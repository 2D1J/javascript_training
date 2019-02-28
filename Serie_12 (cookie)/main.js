document.getElementById("clic").addEventListener("click", cookieClicker);
document.getElementById("multiplier").addEventListener("click", augmenterMultiplicateur);
document.getElementById("autoclick").addEventListener("click", autoClick);
let afficher = document.getElementById("affichage");
let score = Number(0);
let multiplicateur = Number(1);
let costmult = 100;

function augmenterMultiplicateur() {
    // let cost = 50;
    if ((score*multiplicateur) >= costmult) {
        score -= costmult;
        multiplicateur++;
        costmult * 2;
        document.getElementById("multiplier").value = "Multiplicateur x" + multiplicateur + " : " + costmult + " data";
    }
    else {
    }
}

function cookieClicker() {
    setInterval(ChangeColor, 10);
    function ChangeColor() {
        afficher.style.backgroundColor = "teal";
        afficher.style.borderColor = "magenta";
    }
    afficher.style.backgroundColor = "magenta";
    afficher.style.borderColor = "teal";
    score++;
}

function autoClick() {
    let cost = 10;
    if (score >= cost) {
    score++;
    }
    else {};
};

function update(){
    afficher.innerHTML = (score*multiplicateur) + " data collected.";
    console.log("score = " + score);
    console.log("multiplicateur = " + multiplicateur);
    console.log(score*multiplicateur);
    console.log("Cost Mult " + costmult);
    if (score <= 10) {
        document.getElementById("autoclick").style.color = "black";
    }
    else {document.getElementById("autoclick").style.color = "white";}
    if (score <= 50) {
        document.getElementById("multiplier").style.color = "black";
    }
    else {
        document.getElementById("multiplier").style.color = "white";
    }
}
setInterval(autoClick,1000);
setInterval(update,100);
