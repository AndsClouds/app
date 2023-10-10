import card from "./components/cardComponent.js";
(()=>{
    const btn=document.querySelector('[data-navi-btn]');

    const newCard=(eve)=>{
        eve.preventDefault();
        const cardHolder=document.querySelector('[data-cardholder-div]');
        cardHolder.appendChild(card());
        
    };

    btn.addEventListener('click', newCard);
    
})();