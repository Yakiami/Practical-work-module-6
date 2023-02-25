const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    input.textContent = input.value;
    console.log(input.value);
});



const input = document.querySelector('input');
input.addEventListener('input', () => {
    duplicateField.textContent = input.value;
});