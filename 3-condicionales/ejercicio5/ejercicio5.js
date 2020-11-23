'use strict';

const titulo = document.querySelector('h1');

const texto = document.querySelector('p');

if(titulo.classList.contains('warning')|| texto.classList.contains('warning')){
    titulo.innerHTML = `<h1>AVISO</h1>`;
    texto.innerHTML = `<p>Tenga cuidado</p>`;
}else if(titulo.classList.contains('error')|| texto.classList.contains('error')){
    titulo.innerHTML = `<h1>ERROR</h1>`;
    texto.innerHTML = `<p>Ha surgido un error</p>`;
}else if(titulo.classList.contains('success')|| texto.classList.contains('success')){
    titulo.innerHTML = `<h1>CORRECTO</h1>`;
    texto.innerHTML = `<p>Los datos son correctos</p>`;
}    