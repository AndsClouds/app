import b from "./titleComponent.js";
import imgDiv from "./imgComponent.js";
import editionButton from "./editButtonComponent.js";

const takeTitleValue=(titleValue)=>{
    const theTitle=b(titleValue);
    return theTitle;
};

const takeContentValue=(titleContent)=>{
    const paragraph=document.createElement('p');
    paragraph.classList.add('paragraph_content');
    const comillas='"';
    const value=comillas+titleContent+comillas;
    paragraph.innerText=value;
    return paragraph;
};

const card=(titleValue, contentValue, imgValue)=>{
    const divDaddy=document.createElement('div');
    divDaddy.classList.add('card');
    const divTitle=document.createElement('div');
    const divContent=document.createElement('div');
    const divFooter=document.createElement('div');
    const divDate=document.createElement('span');
    const divEditButton=document.createElement('div');
    
    divTitle.classList.add('card_title');
    divTitle.appendChild(takeTitleValue(titleValue));
    divContent.classList.add('card_text');
    divContent.appendChild(takeContentValue(contentValue));
    divContent.appendChild(imgDiv(imgValue, titleValue));
    divDate.classList.add('date_style');
    const today=new Date();
    divDate.innerText=today.getDay() + ' - ' + today.getMonth()+' - '+today.getFullYear();
    divEditButton.appendChild(editionButton());
    divFooter.appendChild(divDate);
    divFooter.appendChild(divEditButton);
    divDaddy.appendChild(divTitle);
    divDaddy.appendChild(divContent);
    divDaddy.appendChild(divFooter);
    return divDaddy;
};

export default card;