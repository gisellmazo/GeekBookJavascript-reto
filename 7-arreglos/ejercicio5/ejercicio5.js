'use strict';

/*let numbers = [13, 8, 2, 6, 20];

let acc = 0;
*/
/*a)

for (let i = 0; i < numbers.length; i++) {
    acc += numbers[i] / 5;
}

console.log('La media de los números es ' + acc);
*/

/* b)
numbers[5] = 22;

for (let i = 0; i < numbers.length; i++) {
    acc += numbers[i] / 6;
}

console.log('La media de los números es ' + acc);
*/
let numbers = [13, 8, 2, 6, 20];
function average(numbers){
    
    let acc = 0;
    for (let i = 0; i < numbers.length; i++) {
        acc += numbers[i];
    }

    let media = acc / numbers.length;
    return media
}
console.log(average(numbers));
