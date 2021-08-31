import {content} from './index.js';

function contactPage(){
    const div = document.createElement('div');
    div.classList.add('text-div');
    const contactText = document.createElement('p');
    contactText.textContent = 'This is the contact page';
    div.appendChild(contactText);
    content.appendChild(div);
}

export {contactPage}