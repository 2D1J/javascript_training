async function getPage(url) {
    let res = await fetch(url);
    let text = await res.json();
    return text
}
  
getPage('https://thatsthespir.it/api').then(result => {
console.log(result)
console.log(result.id);
let body = document.getElementsByTagName("body")[0]; 
let arrowleft = "<i class=\"fas fa-angle-double-left\"></i>";
let arrowright = "<i class=\"fas fa-angle-double-right\"></i>";
if (result.gender == "m") {
    console.log("coucou")
    body.style.backgroundColor = "dodgerblue";
    console.log(body);
}
else if (result.gender == "f") {
    body.style.backgroundColor = "pink";
    console.log("beuh");
    console.log(body);
}

else {
    body.style.backgroundColor = "grey";
}

document.getElementById("quote").innerHTML = arrowleft + " " + result.quote + " " + arrowright;
document.querySelector("h2").innerHTML = result.author;

if (result.photo == "") {
    document.querySelector("img").src = "img/default-image.jpg";
}
else {
    document.querySelector("img").src = result.photo;
}

document.querySelector("img").alt = "Picture of " + result.author;

})