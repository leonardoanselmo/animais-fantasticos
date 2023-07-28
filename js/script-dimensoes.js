const listaAnimais = document.querySelector('.animais-lista');

console.log(listaAnimais.clientHeight);
console.log(listaAnimais.scrollHeight);
console.log(listaAnimais.offsetHeight);
console.log(listaAnimais.offsetTop);

const primeh2 = document.querySelector('h2');
console.log(primeh2.offsetLeft);

const rect = primeh2.getBoundingClientRect();
console.log(rect);

console.log(window.innerWidth);


// EXERCÍCIOS


// Verifique a distância da primeira imagem
// em relação ao topo da página
const img = document.querySelector('img');
console.log(img.offsetTop);

// Retorne a soma da largura de todas as imagens
function somaImagens() {
  const imagens = document.querySelectorAll('img');
  let soma = 0;
  imagens.forEach((imagem) => {
    soma += imagem.offsetWidth;    
  })
  console.log(soma);  
}

// console.log(imagens);

window.onload = function() {
  somaImagens();
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a');
console.log(links);

links.forEach((link) => {
  const linkWidth = link.offsetWidth;
  const linkHeight = link.offsetHeight;
  if(linkWidth >= 48 && linkHeight >= 48) {
    console.log(link, 'Possui acessibilidade')
  } else {
    console.log(link, 'Não Possui acessibilidade')
  }
})

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const browserSmall = window.matchMedia('(max-width: 720px)').matches;

if(browserSmall) {
  const menu = document.querySelector('.menu');
  menu.classList.add('menu-mobile');
}
