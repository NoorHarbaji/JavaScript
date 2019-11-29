const ulElement = document.querySelectorAll('li');

const onClick = eve => {
   if(eve.target.outerText  == "Loop through an Array")
       window.location = "https://codepen.io/NoorHar/pen/yLLwMPa";
   if(eve.target.outerText  == "Add new items from an Array")
       window.location = "https://codepen.io/NoorHar/pen/WNbeepW?editors=0010";
    if(eve.target.outerText == "Remove items from an Array")
       window.location = "https://codepen.io/NoorHar/pen/eYmOOVZ?editors=0011";
    if(eve.target.outerText == "Array Todo List")
       window.location = "https://codepen.io/NoorHar/pen/vYEBOoV?editors=0011";
    if(eve.target.outerText == "Array Todo List2")
       window.location = "";
}

const addEvent = item => 
   item.addEventListener('click', onClick);

ulElement.forEach(addEvent);