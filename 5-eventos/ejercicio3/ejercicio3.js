'use strict';

const parrafo = document.querySelector('p');

function añadeParrafo(){
    const newParrafo = `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, dignissimos cum voluptas provident id numquam reprehenderit eum illo soluta veritatis delectus ut, assumenda excepturi qui! Soluta eveniet repellendus hic iusto?</p>`
    parrafo.innerHTML = parrafo.innerHTML + newParrafo;
}

parrafo.addEventListener('mouseover', añadeParrafo);