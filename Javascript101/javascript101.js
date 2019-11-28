

const ulElement = document.querySelectorAll('li');

const onClick = eve => {
   if(eve.target.outerText == "Use Functions")
       window.location = "https://codepen.io/NoorHar/pen/MWWMVjr?editors=0011";
    if(eve.target.outerText == "Use Variables")
       window.location = "https://codepen.io/NoorHar/pen/VwwqMYL";
    if(eve.target.outerText == "Use Conditionals")
       window.location = "https://codepen.io/NoorHar/pen/vYYveWg?editors=0011";
    if(eve.target.outerText == "Create Functions")
       window.location = "https://codepen.io/NoorHar/pen/VwwqMYL";
}

const addEvent = item => 
   item.addEventListener('click', onClick);

ulElement.forEach(addEvent);