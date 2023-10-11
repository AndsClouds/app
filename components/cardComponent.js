import b from "./titleComponent.js";

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

const card=(titleValue, contentValue)=>{
    const divDaddy=document.createElement('div');
    divDaddy.classList.add('card');
    const divTitle=document.createElement('div');
    const divContent=document.createElement('div');
    const divDate=document.createElement('span');
    divTitle.classList.add('card_title');
    divTitle.appendChild(takeTitleValue(titleValue));
    divContent.classList.add('card_text');
    divContent.appendChild(takeContentValue(contentValue));
    divDate.classList.add('date_style');
    const today=new Date();
    divDate.innerText=today.getDay() + ' - ' + today.getMonth()+' - '+today.getFullYear();
    divDaddy.appendChild(divTitle);
    divDaddy.appendChild(divContent);
    divDaddy.appendChild(divDate);
    return divDaddy;
};

export default card;