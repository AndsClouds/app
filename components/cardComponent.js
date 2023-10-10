import b from "./titleComponent.js";
const card=()=>{
    const divDaddy=document.createElement('div');
    divDaddy.classList.add('card');
    const divTitle=document.createElement('div');
    const divContent=document.createElement('div');
    divTitle.classList.add('card_title');
    divTitle.innerText=b();
    //divTitle.innerText='soy el título';
    divContent.classList.add('card_text');
    divContent.innerText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquet lacinia ante, eget luctus dolor cursus nec. Cras varius ac nisl sed sodales. Praesent id nisi in tellus dictum maximus vitae blandit augue. Fusce ut quam a lorem gravida consequat quis ut est. Proin molestie tristique porttitor. Praesent sit amet lectus lacinia, lacinia massa id, tincidunt mi. Vivamus id nunc eu arcu molestie vehicula commodo eu nisi. Fusce auctor est nec risus mattis placerat. Vestibulum dictum arcu in velit fermentum, non egestas enim tempor. Quisque molestie sem in eleifend auctor. Praesent vitae congue massa. Quisque ac vehicula velit, vel luctus sapien. Nam faucibus velit sed turpis hendrerit finibus. Curabitur ut lobortis augue. Suspendisse in nisi sit amet nulla rhoncus lacinia at ut ante. Suspendisse vitae ipsum elementum, vestibulum dolor pulvinar, porttitor augue.';
    divDaddy.appendChild(divTitle);
    divDaddy.appendChild(divContent);
    return divDaddy;
};

export default card;