import {content} from './index.js';

function homePage(){
    
    const header = document.createElement('h1');
    header.classList.add('header');
    header.innerText = 'This is the home page';
    content.appendChild(header);
}

export {homePage}