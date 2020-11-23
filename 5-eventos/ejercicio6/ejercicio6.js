'use strict';

const fondo = document.querySelector('body');

function fondoRojo(){
    let r = KeyboardEvent;

    if(r == 82){
        fondo.classList.add('fondorojo')
    }
    
}

function fondoMorado(){
    letm = KeyboardEvent;

    if(m == 77){
        fondo.classList.add('fondomorado')
    }
}


fondo.addEventListener('keypress', fondoRojo);

fondo.addEventListener('keypress', fondoMorado);
