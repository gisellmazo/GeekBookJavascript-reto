'use strict';

let triangulos = [];
triangulos.push("★");
function arbol(numero) {
    
    let linea = "";
   
    for (let i = 1; i <= numero; i++) {
        linea = "▲".repeat(i);
        linea += " ".repeat(numero - i);
        
        triangulos.push(linea);
    }
    triangulos.push("|");

    return triangulos;
}

console.log(arbol(5));