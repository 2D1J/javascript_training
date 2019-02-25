let onOff = document.getElementsByTagName("a");
let texte = document.getElementById("texte");
onOff[0].addEventListener("click", textDisplay);
onOff[1].addEventListener("click", textHidden);

function textDisplay() {
    texte.style.display = "unset";
}

function textHidden() {
    texte.style.display = "none";
}