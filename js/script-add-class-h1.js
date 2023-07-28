const img = document.querySelector('img');

function callBack() {
  console.log('clicou na imagem!');
}

// img.addEventListener('click', callBack);

const animaisLista = document.querySelector('.animais-lista');

function callbackLista(event) {
  //console.log(event.currentTarget);
  console.log(event.target);
}

animaisLista.addEventListener('click', callbackLista);

function backgroundBody(event) {
  document.body.classList.toggle('azul');
}

// window.addEventListener('click', backgroundBody);


//Peguei todos os titulos(H1) no site e quando clico em um é acrescentado uma classe CSS para o background
const allTitulos = document.querySelectorAll('.titulo');

function backgroundTitulo(event) {
  event.target.classList.toggle('azul');
}

allTitulos.forEach((item) => {
  item.addEventListener('click', backgroundTitulo);
})