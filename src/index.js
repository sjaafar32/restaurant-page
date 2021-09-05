import _ from 'lodash';
import {navBar, home, menu, contact} from './nav.js';
import {homePage} from './home.js';
import {menuPage} from './menu.js';
import {contactPage} from './contact.js';
import Background from './food.jpeg';

const foodImg = new Image();
foodImg.src = Background;
foodImg.classList.add('food-image');


const content = document.getElementById('content');
content.classList.add('content-div');
const main = document.querySelector("main");

navBar();
contactPage();

function resetHome(){
    content.textContent = '';
    navBar();
    homePage();
}

function resetMenu(){
    content.textContent = '';
    navBar();
    menuPage();
}

function resetContact(){
    content.textContent = '';
    navBar();
    contactPage();
}

document.addEventListener('click', (e) =>{
    const target = e.target.innerText

    if (target === 'Home') resetHome();
    if (target === 'Menu') resetMenu();
    if (target === 'Contact') resetContact();
});

export{content, resetMenu}