console.log('Test');

var btn = document.createElement("button");
var node = document.createTextNode("Increase Font Size");
btn.appendChild(node);

var element = document.getElementById("content");
element.appendChild(btn);

document.querySelector("button").classList.add("new");

document.querySelector("button").addEventListener("click", function() {
	document.getElementById("content").style.fontSize = "21px"
});

var strongE = document.querySelectorAll("strong");

for (i = 0; i < strongE.length; i++) {
	strongE[i].classList.add("textI");
};