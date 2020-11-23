'use strict';

const caja = document.querySelector('div');

const avatar = `<img src="http://placehold.it/300x300">`;

let variable = ``;//<img src="http://www.fillmurray.com/300/300">

caja.innerHTML = ` ${(avatar || variable)}`;



