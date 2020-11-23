'use strict';

const geekGirls =[
    {
        name: 'Maria',
        age: 29,
        profession: 'Diseñadora'
    },
    {
        name: 'Lucia',
        age: 31,
        profession: 'Ingeniera Química'
    },
    {
        name: 'Susana',
        age: 34,
        profession: 'Periodista'
    },
    {
        name: 'Rocio',
        age: 25,
        profession: 'Actriz'
    },
    {
        name: 'Inmaculada',
        age: 21,
        profession: 'Diseñadora'
    }
];

function countGeekGirls(geekGirls){
   let geekGirlsNumber = geekGirls.length;

   return geekGirlsNumber;
}
console.log(countGeekGirls(geekGirls))

function averageAge(geekGirls){
    
    for (const geekGirls = 0; geekGirls < 34; geekGirls++) {
        geekGirls += geekGirls.age[geekGirls] / geekGirls.length;
    }
}

console.log(averageAge(geekGirls))