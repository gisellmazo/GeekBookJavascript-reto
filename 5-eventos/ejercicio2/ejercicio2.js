'use strict';

const input = document.querySelector('input');

const boton = document.querySelector('button');

function muestraNombre(){
    const nombre = input.value;

    console.log(`Hola ${nombre}`);
}

boton.addEventListener('click', muestraNombre);