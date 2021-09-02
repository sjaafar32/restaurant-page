import {content} from './index.js';
import img from './hummus.jpg';
import img2 from './fattoush.jpg';

function menuPage(){
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu-page-div');
    const menuText = document.createElement('p');
    menuText.textContent = 'This is the menu page';

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
            title.classList.add('card-title');
            title.innerHTML = this.name;

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
    const hummusDes = 'This is a description of the food and its ingredients';
    const hummus = new foodCard('Hummus', '5', hummusImg, hummusDes);
    hummus.createCard();

    const fattoushImg = new Image();
    fattoushImg.src = img2;
    fattoushImg.classList.add('card-image');
    const fattoushDes = 'This is a description of the food and its ingredients';
    const fattoush = new foodCard('Fattoush', '4', fattoushImg, fattoushDes);
    fattoush.createCard();

    /*const item = (itemName, itemPrice) => {
        const name = () => itemName;
        const price = () => itemPrice;

        return {name, price} 
    }

    const createCard = (name, price, image) => {
        const newCard = document.createElement('div');
        newCard.classList.add('menu-card');
        newCard.innerText = 'Price is ' + price;
        menuDiv.appendChild(newCard);

        return {createCard}
    }

    fries = item('fries', '6');
    const friesImage = new Image();
    friesImage.src = img;
    createCard(fries.name(), fries.price(), friesImage);
    */
}

export {menuPage}