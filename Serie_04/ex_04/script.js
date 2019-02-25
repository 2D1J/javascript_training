let btn = document.getElementsByTagName("button");
btn[0].addEventListener("click", verif);

function verif() {
    let x = document.getElementById("motdepasse");
    let y = document.getElementById("confirmation");
   

    if (x.value === y.value) {
        x.style.border = "1px solid green";
        y.style.border = "1px solid green";
    }
    
    else {
        x.style.border = "1px solid red"
        y.style.border = "1px solid red";
        
    }
    console.log(x + " _ " + y);

}