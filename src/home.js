import {content} from './index.js';
import Background from './food.jpeg';
import {resetMenu} from './index.js';

function homePage(){
    const homeDiv = document.createElement('div');
    homeDiv.classList.add('home-div');
    const textDiv = document.createElement('div');
    const homeText = document.createElement('p');
    textDiv.classList.add('text-div');
    homeText.innerText = `Welcome to Cedar Tree, \n Home of Authentic Lebanese Cuisine!`;

    const foodImg = document.createElement('img');
    foodImg.src = Background;
    foodImg.classList.add('food-image');

    const menuBtn = document.createElement('button');
    menuBtn.classList.add('menu-button');
    menuBtn.innerText = 'Order Now';
    menuBtn.addEventListener('click', resetMenu);

    textDiv.appendChild(homeText);
    textDiv.appendChild(menuBtn);
    homeDiv.appendChild(foodImg);
    homeDiv.appendChild(textDiv);
    
    content.appendChild(homeDiv);
}

export {homePage}