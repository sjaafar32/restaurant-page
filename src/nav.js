import {content} from './index.js';
import css from '../style.css';
import Icon from './logo.png';

let home;
let menu;
let contact;


function navBar(){
    const div = document.createElement('div');
    const navList = document.createElement('div');
    
    navList.classList.add('nav-bar');

    home = document.createElement('a');
    menu = document.createElement('a');
    contact = document.createElement('a');

    home.innerText = 'Home';
    menu.innerText = 'Menu'
    contact.innerText = 'Contact';


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

export {navBar, home, menu, contact}