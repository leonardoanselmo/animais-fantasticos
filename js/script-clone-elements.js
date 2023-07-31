// Duplique o menu e adicione ele em copy.
const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');

// Coloquei true pra pegar todos os filhos do menu.
const cloneMenu = menu.cloneNode(true);

copy.appendChild(cloneMenu);

// Selecione o primeiro DT da dl de FAQ
const faq = document.querySelector('.faq');
const primeiroDt = faq.querySelector('dt');

console.log(primeiroDt);

//Selecione o DD referente ao primeiro DT
 const primeiroDD = faq.querySelector('dd');
 console.log(primeiroDD);

// Substitua o conteudo html de .faq pelo de .animais
const animais = document.querySelector('.animais');
faq.innerHTML = animais.innerHTML;