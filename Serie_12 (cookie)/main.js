const CLIC = document.getElementById("clic");
const BONUS = document.getElementById("bonus");
const AUTOCLICK = document.getElementById("autoclick");
const MULTIPLIER = document.getElementById("multiplier");
const AFFICHER = document.getElementById("affichage");

CLIC.addEventListener("click", cookieClicker);
MULTIPLIER.addEventListener("click", augmenterMultiplicateur);
AUTOCLICK.addEventListener("click", autoClick);
BONUS.addEventListener("click", bonus);

let score = Number(0);
let multiplicateur = Number(1);
let costmult = 50;
let costauto = 500;
let i = 0
let costbonus = 5000;

function augmenterMultiplicateur() {
    if (score >= costmult) {
        score -= costmult;
        multiplicateur++;
        costmult = costmult * 2;
        // MULTIPLIER.value = "Multiplicateur x" + multiplicateur + " : " + costmult + " data";
    }
    else {
    }
}

function cookieClicker() {
    affichage.classList.toggle("toggleclic");
    score = score+multiplicateur;
}

function bonus() {
    if (score >= costbonus) {
        score -= costbonus;
        score = 2 * score;
        let i = 0;
        let chrono = 30;
        let timer = setInterval(function(){
            score = score * Number(2);
            i++
            chrono -= i;
            console.log(i);
            BONUS.value = "Bonus actif pendant " + chrono + "secondes";
            if (i >= 30) {
                clearInterval(timer)
                }
            else {}
        }, 1000);
        // console.log(i);
        // if (i >= 30) {
        // clearInterval(timer)
        // }
        // else {}
    }
};


function autoClick() {
    if (score >= costauto) {
        score -= costauto;
        setInterval(function(){score++;},1000);
        AUTOCLICK.style.display = "none";
    }
    else {}
};

function update(){
    AFFICHER.innerHTML = score + " data collected.";
    MULTIPLIER.value = "Multiplicateur x" + multiplicateur + " : " + costmult + " data";
    BONUS.value = "Bonus : " + costbonus + " data";
    AUTOCLICK.value = "Autoclicker : " + costauto + " data";

    if (score < costauto) {
        AUTOCLICK.style.color = "black";
    }
    else {AUTOCLICK.style.color = "white";}
    
    if (score < costmult) {
        MULTIPLIER.style.color = "black";
    }
    else {MULTIPLIER.style.color = "white";}

    if (score < costbonus) {
        BONUS.style.color = "black";
    }
    else {BONUS.style.color = "white";}
}

setInterval(update,100);
