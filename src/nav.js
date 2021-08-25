import {content} from './index.js';
import css from '../style.css';
import Icon from './logo.png';

function navBar(){
    const div = document.createElement('div');
    const navList = document.createElement('div');
    
    navList.classList.add('nav-bar');

    const home = document.createElement('a');
    const menu = document.createElement('a');
    const contact = document.createElement('a');

    home.innerHTML = 'Home';
    menu.innerHTML = 'Menu'
    contact.innerHTML = 'Contact';

    home.classList.add('nav-text');
    menu.classList.add('nav-text');
    contact.classList.add('nav-text');

    navList.appendChild(home);
    navList.appendChild(menu);
    navList.appendChild(contact);

    const logo = new Image();
    logo.src = Icon;
    logo.classList.add('logo');

    div.appendChild(logo);
    div.appendChild(navList);

    div.classList.add('nav-logo-div');

    content.appendChild(div); 
}

export {navBar}