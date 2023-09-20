var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLength(){
	return input.value.length;
} 

function listLength(){
	return item.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
	input.value = "";
// START ADD DELETE BUTTON
	var destroy = document.createElement("button");
	destroy.appendChild(document.createTextNode("X"));
	li.appendChild(destroy);
// END ADD DELETE BUTTON
// implement creates an element "li"
// implement makes text from input field the li text
// implement adds li to ul
// implement Reset text input field


		//START STRIKETHROUGH
		// because it's in the function, it only adds it for new items
		function crossOut() {
			li.classList.toggle("done");}
		li.addEventListener("click",crossOut);
		//END STRIKETHROUGH





		//ADD CLASS DELETE (DISPLAY: NONE)
		function deleteListItem(){
			ul.removeChild(li);}
		destroy.addEventListener("click",deleteListItem);}
		//END ADD CLASS DELETE



function addListAfterClick(){
	if (inputLength() > 0) { //makes sure that an empty input field doesn't create a li
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.which ===13) { //this now looks to see if you hit "enter"/"return"
		//the 13 is the enter key's keycode, this could also be display by event.keyCode === 13
		createListElement();
	} 
}
document.addEventListener("DOMContentLoaded", function () {

enterButton.addEventListener("click",addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

});