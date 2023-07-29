const h1 = document.querySelector('h1');
console.log(h1.innerHTML);

const animaisLista = document.querySelector('.animais-lista');
console.log(animaisLista.parentElement.parentElement);

const tituloh1 = document.querySelector('.titulo');
const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');

//Movi o titulo de contato para abaixo do H1 Animais Fantásticos
tituloh1.appendChild(titulo);