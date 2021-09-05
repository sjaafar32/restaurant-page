import {content} from './index.js';
import img from './hummus.jpg';
import img2 from './fattoush.jpg';
import img3 from './tabbouleh.jpg';
import img4 from './kafta.jpg';
import img5 from './chicken-shawarma.jpg';
import img6 from './manakish.jpg';

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

            this.image.classList.add('card-image');

            const text = document.createElement('p');
            text.innerText = this.description;

            newCard.appendChild(title);
            newCard.appendChild(this.image);
            newCard.appendChild(text);
            cardsDiv.appendChild(newCard);
            menuDiv.appendChild(cardsDiv);
            content.appendChild(menuDiv);
        }
    }

    const hummusImg = new Image();
    hummusImg.src = img;
    hummusImg.classList.add('card-image');
    const hummusDes = 'Hummus is a Middle Eastern dip, spread, or savory dish made from cooked, mashed chickpeas blended with tahini, lemon juice, and garlic.';
    const hummus = new foodCard('Hummus', '$4', hummusImg, hummusDes);
    hummus.createCard();

    const fattoushImg = new Image();
    fattoushImg.src = img2;
    fattoushImg.classList.add('card-image');
    const fattoushDes = 'Fattoush is a Levantine salad made from toasted or fried pieces of pita bread combined with mixed greens and other vegetables, such as radishes and tomatoes.';
    const fattoush = new foodCard('Fattoush', '$5', fattoushImg, fattoushDes);
    fattoush.createCard();

    const tabboulehImg = new Image();
    tabboulehImg.src = img3;
    tabboulehImg.classList.add('card-image');
    const tabboulehDes = 'Tabbouleh is a Levantine salad made mostly of finely chopped parsley, with tomatoes, mint, onion, bulgur, and seasoned with olive oil, lemon juice, salt and sweet pepper.';
    const tabbouleh = new foodCard('Tabbouleh', '$4', tabboulehImg, tabboulehDes);
    tabbouleh.createCard();

    const kaftaImg = new Image();
    kaftaImg.src = img4;
    kaftaImg.classList.add('card-image');
    const kaftaDes = 'Kafta is a traditional middle eastern dish made with ground beef or lamb, minced onions, chopped parsley, and seasoned with middle eastern spices.';
    const kafta = new foodCard('Kafta', '$6', kaftaImg, kaftaDes);
    kafta.createCard();

    const shawarmaImg = new Image();
    shawarmaImg.src = img5;
    shawarmaImg.classList.add('card-image');
    const shawarmaDes = 'The popular middle eastern shawarma sandwich consists of chicken or meat, various vegetables, garlic sauce all wrapped in pita bread.';
    const shawarma = new foodCard('Shawarma Sandwich', '$5', shawarmaImg, shawarmaDes);
    shawarma.createCard();

    const manakishImg = new Image();
    manakishImg.src = img6;
    manakishImg.classList.add('card-image');
    const manakishDes = 'Manakish is a popular Levantine food consisting of dough topped with thyme, cheese, or ground meat which can be sliced or folded.';
    const manakish = new foodCard('Manakish', '$4', manakishImg, manakishDes);
    manakish.createCard();
}

export {menuPage}