'use strict';

const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';

const boton = document.querySelector('button');

const lista = document.querySelector('ul');

function mostrarLista(){

lista.innerHTML = `<li>${inception}</li><li>${theButterFlyEffect}</li><li>${eternalSunshineOfTheSM}</li><li>${blueVelvet}</li><li>${split}</li>`
}

boton.addEventListener('click', mostrarLista);

function mostrarEnConsola(event){
    const li = event.currentTarget;
    console.log(event.currentTarget);
}

lista.addEventListener('click', mostrarEnConsola);