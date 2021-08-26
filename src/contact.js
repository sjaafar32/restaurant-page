import {content} from './index.js';

function contactPage(){
    const contactText = document.createElement('h1');
    contactText.textContent = 'This is the contact page';
    contactText.classList.add('header');
    content.appendChild(contactText);
}

export {contactPage}