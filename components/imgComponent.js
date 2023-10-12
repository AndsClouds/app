const imgDiv=(imgValue, titleValue)=>{
    const divHolder=document.createElement('div');
    divHolder.classList.add('div_img');
    const imgOnly=document.createElement('img');
    //imgOnly.classList.add('img_size');
    imgOnly.setAttribute('src', imgValue);
    imgOnly.setAttribute('alt', titleValue);
    imgOnly.setAttribute('height', '390px');
    imgOnly.setAttribute('width', '325px');
    divHolder.appendChild(imgOnly);
    return divHolder;
};

export default imgDiv;