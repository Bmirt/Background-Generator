var body = document.querySelector("#bigDaddy");
var color1 = document.querySelector("#color1")
var color2 = document.querySelector("#color2")
var text = document.querySelector("h3")


var changeColor = function() {
    body.style.background = `linear-gradient(to bottom right, ${color1.value}, ${color2.value})`;
    text.textContent = body.style.background;
}

color1.addEventListener('input', changeColor)
color2.addEventListener('input', changeColor)