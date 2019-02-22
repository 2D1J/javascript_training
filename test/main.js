const input = document.getElementById("letterbox");
input.onfocus = function() {test()};

function test() {
    input.removeAttribute("value");
    x = document.getElementById("letterbox").value 
    alert("test" + x);
    input.value = "testdqkljdlq";
}