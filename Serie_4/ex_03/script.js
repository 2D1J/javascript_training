let divbtn = document.getElementsByClassName("color");
let texte = document.getElementById("texte");

Array.from(divbtn).forEach(element => {
    console.log(element);
    element.addEventListener("click", changeColor);
    function changeColor() {
        console.log(element);
        if (element.className === "color green") {
            texte.style.color = "green";
        }

        else if (element.className === "color red") {
            texte.style.color = "red";
        }

        else if (element.className === "color blue") {
            texte.style.color = "blue";
        }

        else {
            texte.style.color = "purple";
        }

        console.log(element.className[4]);
    }  
});