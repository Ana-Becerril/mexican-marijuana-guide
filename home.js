import search from    './src/search.svg'


function home (){

    const homeContainer=document.createElement("div");
    homeContainer.classList.add("home-container");

    const homeBox=document.createElement("div");
    homeBox.classList.add("home-box")

    const homeTittle=document.createElement("div");
    homeTittle.innerHTML="Marijuana Guide"
    homeTittle.classList.add("home-tittle");

    const iconSearchContainer=document.createElement("div")
    iconSearchContainer.classList.add("icon-container");
    iconSearchContainer.classList.add("bounce-in-left")
    const iconSearch=document.createElement("img");
    iconSearch.src = search;    
    iconSearch.classList.add("icon-search");

    const input=document.createElement("input");
    input.classList.add("input");
    input.type=Text

    const homeDescription=document.createElement("div");
    homeDescription.innerHTML="Flavors and Effects"
    homeDescription.classList.add("home-description");
   
    iconSearchContainer.appendChild(iconSearch);
    homeBox.append(homeTittle, iconSearchContainer, homeDescription);
    homeContainer.appendChild(homeBox);
    return homeContainer;
    
    }
    
    export default home;