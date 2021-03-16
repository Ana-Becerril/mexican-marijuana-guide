function home (){

    const homeContainer=document.createElement("div");
    homeContainer.classList.add("home-container");

    const homeBox=document.createElement("div");
    homeBox.classList.add("home-box")
    const homeTittle=document.createElement("div");
    homeTittle.innerHTML="Marijuana Guide"
    homeTittle.classList.add("home-tittle");

    const iconSearch=document.createElement("div")
    iconSearch

    const homeDescription=document.createElement("div");
    homeDescription.innerHTML="Flavors and Effects"
    homeDescription.classList.add("home-description");
   
    homeBox.append(homeTittle, homeDescription);
    homeContainer.appendChild(homeBox);
    return homeContainer;
    
    }
    
    export default home;