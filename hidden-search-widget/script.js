const search = document.querySelector('.search');
const input = document.querySelector('.input');
const button = document.querySelector('.button');
let openStatus = false;

button.addEventListener('click', () => {
  search.classList.toggle('active');
  input.focus();
});
