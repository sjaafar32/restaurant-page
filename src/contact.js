import {content} from './index.js';
import Background from './food.jpeg';

function contactPage(){
    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact-div');

    const contactHeader = document.createElement('p');
    contactHeader.innerText = `Here's Where You Can Find Us`;
    contactHeader.classList.add('contact-header');

    const hoursDiv = document.createElement('div');
    hoursDiv.innerText = 'Hours of Operation';
    hoursDiv.classList.add('hours');
    const hoursInfo = document.createElement('div')
    hoursInfo.innerText = `\n Monday: 9 AM - 9 PM
    
    Tuesday: 8 AM - 8 PM

    Wednesdy: 8 AM-8 PM 

    Thursday: 8 AM - 8 PM

    Friday: 8 AM - 10 PM

    Saturday: 9 AM - 11 PM

    Sunday: 9 AM - 10 PM`;

    hoursInfo.style.setProperty('font-weight', 100);

    const foodImg = document.createElement('img');
    foodImg.src = Background;
    foodImg.classList.add('contact-background');

    const map = document.createElement('iframe');
    map.src = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d23596.147146065876!2d-83.0527236336883!3d42.33146991850391!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf38417235af02ab9!2sTCF%20Center!5e0!3m2!1sen!2sus!4v1630796496534!5m2!1sen!2sus';
    map.classList.add('map');

    const mapHoursDiv = document.createElement('div');
    mapHoursDiv.classList.add('map-hours-div');

    content.appendChild(foodImg);
    contactDiv.appendChild(contactHeader);
    hoursDiv.appendChild(hoursInfo);
    mapHoursDiv.appendChild(hoursDiv);
    mapHoursDiv.appendChild(map);
    contactDiv.appendChild(mapHoursDiv);
    content.appendChild(contactDiv);

    //<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d23596.147146065876!2d-83.0527236336883!3d42.33146991850391!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf38417235af02ab9!2sTCF%20Center!5e0!3m2!1sen!2sus!4v1630796496534!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
}

export {contactPage}