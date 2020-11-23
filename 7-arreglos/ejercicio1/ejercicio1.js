'use strict';

const peliculas1 = [
    'Mamma Mia',
    'Rapunzel',
    'Monte Carlo'
];

function workWithMovies(){
    peliculas1[3] = 'Avengers';

console.log(peliculas1)

peliculas1[2] = 'Toy Story';

console.log(peliculas1)

peliculas1[1] = 'Sherlock Holmes';
console.log(peliculas1)
}

console.log(workWithMovies());