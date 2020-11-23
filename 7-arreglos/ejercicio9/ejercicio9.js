'use strict';

function arbol(numero) {
    let triangulos = [];
    let linea = "";
   
    for (let i = 1; i <= numero; i++) {
        linea = "▲".repeat(i);
        linea += " ".repeat(numero - i);

        triangulos.push(linea);
    }

    return triangulos;
}
console.log(arbol(5));
