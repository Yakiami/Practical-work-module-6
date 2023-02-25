const element = document.querySelector('a');

element.onclick = function(event) {
let promptText = prompt();
element.textContent = promptText;
event.preventDefault();
}