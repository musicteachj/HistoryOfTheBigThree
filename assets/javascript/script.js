// Create Button Element
// Create Element
var btn = document.createElement("button");
//Create text node
var node = document.createTextNode("Increase Font Size");
// Append text node to button element
btn.appendChild(node);
// Grab element with id "content"
var element = document.getElementById("content");
// Append newly created button element to DOM
element.appendChild(btn);

// Add class of "new" to button
document.querySelector("button").classList.add("new");

// Grab button element and add click event
document.querySelector("button").addEventListener("click", function() {
	// When button clicked, grab content Id and add new styles
	document.getElementById("content").style.fontSize = "21px"
});

// Store all strong elements/tags in variable array
var strongE = document.querySelectorAll("strong");

// Loop through array
for (i = 0; i < strongE.length; i++) {
	// Add class "textI" to all items in strongE array
	strongE[i].classList.add("textI");
};