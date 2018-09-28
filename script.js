var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("btnRandom");

body.onload = setGradient();

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function randomHex(){
	return "#"+(Math.random()*0xFFFFFF<<0).toString(16);
}

function randomColorEvent(){
	color1.value = randomHex();
	color2.value = randomHex();

	setGradient();
}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", randomColorEvent);
