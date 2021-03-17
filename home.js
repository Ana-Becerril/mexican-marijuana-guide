import search from    './src/search.svg'


function home (){

    const homeContainer=document.createElement("div");
    homeContainer.classList.add("home-container");

    const homeBox=document.createElement("div");
    homeBox.classList.add("home-box")

    const homeTittle=document.createElement("div");
    homeTittle.innerHTML="Marijuana Guide"
    homeTittle.classList.add("home-tittle");

    const searchBox=document.createElement("div")
    searchBox.classList.add("search-box");
    var input = document.createElement("div")
    input.classList.add("input");
    input.classList.add("bounce-in-left")

    var array = ["Sativa","Indica","Hybrid"];

    var selectList = document.createElement("select");
    selectList.id = "mySelect";
    input.appendChild(selectList);

    for (var i = 0; i < array.length; i++) {
        var option = document.createElement("option");
        option.classList.add("options");
        option.value = array[i];
        option.text = array[i];
        selectList.appendChild(option);
    }

    const homeDescription=document.createElement("div");
    homeDescription.innerHTML="Flavors and Effects"
    homeDescription.classList.add("home-description");

    searchBox.appendChild(input)
    homeBox.append(homeTittle, searchBox, homeDescription);
    homeContainer.appendChild(homeBox);
    return homeContainer;
    
    }
    
    export default home;