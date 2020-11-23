'use strict';

const titulo = document.querySelector('h1');


let muestra =(titulo.classList.contains('warning') ? 
    titulo.innerHTML = `<h1>AVISO Tenga cuidado</h1>` : 
    titulo.classList.contains('error') ? 
    titulo.innerHTML = `<h1>ERROR Ha surgido un error</h1>`:
    (titulo.classList.contains('success') ?
    titulo.innerHTML = `<h1>CORRECTO Los datos son correctos</h1>`: otroNumero))