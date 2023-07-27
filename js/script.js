// Retorne no console todas as imagens do site
const allImagens = document.querySelectorAll('img');
console.log(allImagens);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagensAnimais = document.querySelectorAll('img[src^="./img/imagem"]');
console.log(imagensAnimais);

// Selecione todos os links internos (onde o href começa com #)
const linkInterno = document.querySelectorAll('[href^="#"]');
console.log(linkInterno);

// Selecione o primeiro h2 dentro de .animais-descricao
const titulo = document.querySelector('.animais-descricao h2');
console.log(titulo);

// Selecione o último p do site
const paragrafos = document.querySelectorAll('p');
console.log(paragrafos[0].innerText);
console.log(paragrafos[paragrafos.length-1]);

paragrafos.forEach(function(item){
  console.log(item.innerText);
});

allImagens.forEach(function(item, index, array){
  console.log(item, index, array);
})

const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

titulosArray.forEach(function(item){
  console.log(item.innerHTML);
})

const imgs = document.querySelectorAll('img');

imgs.forEach((item) => {
  console.log(item);
})

//Igual ao de cima, apenas retirei o ()
imgs.forEach(item => {
  console.log(item);
})