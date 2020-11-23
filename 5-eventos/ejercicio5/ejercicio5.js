'use strict';

const li = document.querySelector('li');

function añadirClase(){
    li.classList.toggle('teacher--selected')
}

li.addEventListener('click', añadirClase);

const texto = document.querySelector('.favorite');
 function cambiarTexto(){
    texto.innerHTML =`Quitar`;
 }
texto.addEventListener('click', cambiarTexto);