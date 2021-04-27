var main = document.getElementById("main-body");
var color1 = document.getElementsByClassName("color1")[0];
var color2 = document.getElementsByClassName("color2")[0];
var result = document.getElementsByClassName("result")[0];

function backgroundGen () {
	main.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")" ;
	result.textContent = main.style.background;
	result.style.color = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")" ;
}


color1.addEventListener("input",backgroundGen);
color2.addEventListener("input",backgroundGen);