import card from "./components/cardComponent.js";

(()=>{
    const btn=document.querySelector('[data-navi-btn]');

    const newCard=(eve)=>{
        eve.preventDefault();
        const cardHolder=document.querySelector('[data-cardholder-div]');
        const inputTitle=document.querySelector('[data-highTitle-input]');
        const inputContent=document.querySelector('[data-downContent-input]');
        const inputImg=document.querySelector('[data-img-input]');
        const titleValue=inputTitle.value;
        const contentValue=inputContent.value;
        const imgValue=inputImg.value;
        cardHolder.appendChild(card(titleValue, contentValue, imgValue));  
        inputTitle.value='';
        inputContent.value='';
        inputImg.value='';
    };

    btn.addEventListener('click', newCard);
    
})();