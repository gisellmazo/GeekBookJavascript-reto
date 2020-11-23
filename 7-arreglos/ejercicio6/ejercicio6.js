'use strict';

const obras = [];
function capturar(obras){
    
    obras.push(document.querySelector('input').value)
    for (const opcion of obras) {
       let aux = opcion.split(",");
        console.log ("¡A mí también me encantó "+ aux[0] ,"! Tenemos mucho en común, humana.");
      }
}