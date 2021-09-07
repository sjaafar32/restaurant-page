import {content} from './index.js';
import hummusImg from './hummus.jpg';
import fattoushImg from './fattoush.jpg';
import tabboulehImg from './tabbouleh.jpg';
import kaftaImg from './kafta.jpg';
import shawarmaImg from './chicken-shawarma.jpg';
import manakishImg from './manakish.jpg';

function menuPage(){
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu-page-div');
    const menuText = document.createElement('p');
    menuText.textContent = 'Check out the delicious food we have to offer!';

    menuDiv.appendChild(menuText);
    content.appendChild(menuDiv);

    const cardsDiv = document.createElement('div');
    cardsDiv.classList.add('cards-div');


    class foodCard {

        constructor(name, price, image, description){
            this.name = name;
            this.price = price;
            this.image = image;
            this.description = description;
        }

        createCard = () => {
            const newCard = document.createElement('div');
            newCard.classList.add('menu-card');
            const title = document.createElement('h3');
            title.innerHTML = this.name + ` - ` + this.price;

            const pic = new Image();
            pic.src = this.image;
            pic.classList.add('card-image');

            const text = document.createElement('p');
            text.innerText = this.description;

            newCard.appendChild(title);
            newCard.appendChild(pic);
            newCard.appendChild(text);
            cardsDiv.appendChild(newCard);
            menuDiv.appendChild(cardsDiv);
            content.appendChild(menuDiv);
        }
    }
 
    const hummusDes = 'Hummus is a Middle Eastern dip, spread, or savory dish made from cooked, mashed chickpeas blended with tahini, lemon juice, and garlic.';
    const hummus = new foodCard('Hummus', '$4', hummusImg, hummusDes);
    hummus.createCard();

    const fattoushDes = 'Fattoush is a Levantine salad made from toasted or fried pieces of pita bread combined with mixed greens and other vegetables, such as radishes and tomatoes.';
    const fattoush = new foodCard('Fattoush', '$5', fattoushImg, fattoushDes);
    fattoush.createCard();

    const tabboulehDes = 'Tabbouleh is a Levantine salad made mostly of finely chopped parsley, with tomatoes, mint, onion, bulgur, and seasoned with olive oil, lemon juice, salt and sweet pepper.';
    const tabbouleh = new foodCard('Tabbouleh', '$4', tabboulehImg, tabboulehDes);
    tabbouleh.createCard();

    const kaftaDes = 'Kafta is a traditional middle eastern dish made with ground beef or lamb, minced onions, chopped parsley, and seasoned with middle eastern spices.';
    const kafta = new foodCard('Kafta', '$6', kaftaImg, kaftaDes);
    kafta.createCard();

    const shawarmaDes = 'The popular middle eastern shawarma sandwich consists of chicken or meat, various vegetables, garlic sauce all wrapped in pita bread.';
    const shawarma = new foodCard('Shawarma Sandwich', '$5', shawarmaImg, shawarmaDes);
    shawarma.createCard();

    const manakishDes = 'Manakish is a popular Levantine food consisting of dough topped with thyme, cheese, or ground meat which can be sliced or folded.';
    const manakish = new foodCard('Manakish', '$4', manakishImg, manakishDes);
    manakish.createCard();  
}

export {menuPage}