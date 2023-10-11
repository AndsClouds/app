import card from "./components/cardComponent.js";

(()=>{
    const btn=document.querySelector('[data-navi-btn]');

    const newCard=(eve)=>{
        eve.preventDefault();
        const cardHolder=document.querySelector('[data-cardholder-div]');
        const inputTitle=document.querySelector('[data-highTitle-input]');
        const inputContent=document.querySelector('[data-downContent-input]');
        const titleValue=inputTitle.value;
        const contentValue=inputContent.value;
        cardHolder.appendChild(card(titleValue, contentValue));  
        inputTitle.value='';
        inputContent.value='';
    };

    btn.addEventListener('click', newCard);
    
})();