import iweeed from    './src/iweed.svg'

function items(){
    const cardsContainer=document.createElement("div");
    cardsContainer.classList.add("cards-container");

    const headerContainer=document.createElement("div");
    headerContainer.classList.add("header-container");
    const header=document.createElement("div");
    header.classList.add("header");
    header.innerHTML="";

    const iconContainer=document.createElement("div");
    iconContainer.classList.add("icon-container");

    const iweed=document.createElement("img");
    iweed.src = iweeed;    
    iweed.classList.add("iweed");





    iconContainer.appendChild(iweed);
    header.appendChild(iconContainer);
    headerContainer.appendChild(header);
    cardsContainer.appendChild(headerContainer);
    return cardsContainer;
}

export default items;