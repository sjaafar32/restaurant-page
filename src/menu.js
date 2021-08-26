import {content} from './index.js';

function menuPage(){
    const menuText = document.createElement('h1');
    menuText.textContent = 'This is the menu page';
    menuText.classList.add('header');
    content.appendChild(menuText);
}

export {menuPage}