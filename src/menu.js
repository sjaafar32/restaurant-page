import {content} from './index.js';

function menuPage(){
    const div = document.createElement('div');
    div.classList.add('text-div');
    const menuText = document.createElement('p');
    menuText.textContent = 'This is the menu page';
    div.appendChild(menuText);
    content.appendChild(div);
}

export {menuPage}