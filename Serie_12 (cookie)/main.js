document.getElementById("clic").addEventListener("click", cookieClicker);
document.getElementById("multiplier").addEventListener("click", augmenterMultiplicateur);
document.getElementById("autoclick").addEventListener("click", autoClick);
let afficher = document.getElementById("affichage");
let score = Number(0);
let multiplicateur = Number(1);
let costmult = 50;

function augmenterMultiplicateur() {
    // let cost = 50;
    if (score >= costmult) {
        score -= costmult;
        multiplicateur++;
        costmult = costmult * 2;
        document.getElementById("multiplier").value = "Multiplicateur x" + multiplicateur + " : " + costmult + " data";
    }
    else {
    }
}

function cookieClicker() {
    // setInterval(ChangeColor, 100);
    affichage.classList.toggle("toggleclic");
    score = score+multiplicateur;
}



function autoClick() {
    let cost = 500;
    if (score >= cost) {
    score++;
    }
    else {};
};

function update(){
    afficher.innerHTML = score + " data collected.";
    console.log("score = " + score);
    console.log("multiplicateur = " + multiplicateur);
    console.log("Cost Mult " + costmult);
    if (score <= 10) {
        document.getElementById("autoclick").style.color = "black";
    }
    else {document.getElementById("autoclick").style.color = "white";}
    if (score < costmult) {
        document.getElementById("multiplier").style.color = "black";
    }
    else {
        document.getElementById("multiplier").style.color = "white";
    }
}
setInterval(autoClick,1000);
setInterval(update,100);
