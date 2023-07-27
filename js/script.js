const menu = document.querySelector('.menu');
console.log(menu.classList);

menu.classList.add('menu-script');
menu.classList.remove('menu-script');
menu.classList.toggle('menu-script');
menu.classList.toggle('menu-script');

console.log(menu.className);

const animais = document.querySelector('.animais');
console.log(animais.attributes.class.nodeValue);

const img = document.querySelector('img');
console.log(img.getAttribute('src'));

img.setAttribute('alt', 'Foto de uma raposa.');

const paragrafo = document.querySelector('p');
console.log(paragrafo);

