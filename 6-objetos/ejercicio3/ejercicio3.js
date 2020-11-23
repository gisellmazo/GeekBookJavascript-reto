'use strict';

const geekGirl = {}
    geekGirl.nombre = 'María',
    geekGirl.edad = 34,
    geekGirl.profesion = 'periodista',
    geekGirl.showBio = function (){
    return`Mi nombre es ` + this.nombre + `, tengo ` + this.edad + ` y soy ` + this.profesion;
}

const geekGirl2 = {}
    geekGirl2.nombre = 'Rocio',
    geekGirl2.edad = 25,
    geekGirl2.profesion = 'actriz',
    geekGirl2.showBio = function (){
    return`Mi nombre es ` + this.nombre + `, tengo ` + this.edad + ` y soy ` + this.profesion;
}

alert(geekGirl.showBio());
alert(geekGirl2.showBio());


