'use strict';

let triangulos = [];
        function arbol(numero) {

            let linea = "";
            let acc;
            
            for (let i = 1; i <= numero; i++) {
                linea = " ".repeat(numero - i);
                if (i === 1) {
                    triangulos.push(linea + "★");
                    acc = linea;
                }
                linea += "▲".repeat(i);

                // añadimos la linea al array
                triangulos.push(linea);
            }
            triangulos.push(acc + "|");

            return triangulos;
        }
        function arbol2(numero) {
            let linea = "";
            // bucle que define cada uno de los elementos del array
            for (let i = 1; i <= numero; i++) {
                linea = "▲".repeat(i);
                linea += " ".repeat(numero - i);
                // añadimos la linea al array
                triangulos[i] += linea;
            }

            return triangulos;
        }
        arbol(5);
        arbol2(5);
        console.log(triangulos);