const ulElement = document.querySelectorAll('li');

const onClick = eve => {
   if(eve.target.outerText  == "Events: onClick")
       window.location = "https://codepen.io/NoorHar/pen/dyyzEpR";
    if(eve.target.outerText == "Web API")
       window.location = "https://codepen.io/NoorHar/pen/JjjBPge";
    if(eve.target.outerText == "Events Context")
       window.location = "https://codepen.io/NoorHar/pen/vYYqbBd";
    if(eve.target.outerText == "Events: onChange")
       window.location = "https://codepen.io/NoorHar/pen/ZEEMVPd";
    if(eve.target.outerText == "The Chat Input")
       window.location = "https://codepen.io/NoorHar/pen/xxxyLoG";
}

const addEvent = item => 
   item.addEventListener('click', onClick);

ulElement.forEach(addEvent);