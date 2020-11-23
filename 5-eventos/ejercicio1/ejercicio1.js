'use strict';

const boton = document.querySelector('button');

const texto = document.querySelector('h1');

function muestraTexto(){
    texto.innerHTML =  "Mi primer click, ¡ole yo y la mujer que me parió!";
}

boton.addEventListener('click', muestraTexto);