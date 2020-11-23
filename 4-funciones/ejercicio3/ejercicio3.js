'use strict';

function precio(siniva) {
    let iva = 0.21;
    let resultado = (iva * siniva) + siniva;
    return `Precio sin IVA: ${siniva}, IVA:2.1 y Total:${resultado}`;
  }
  console.log(precio(9));