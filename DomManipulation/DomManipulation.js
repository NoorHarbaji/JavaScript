const ulElement = document.querySelectorAll('li');

const onClick = eve => {
   if(eve.target.outerText  == "Append Child")
       window.location = "https://codepen.io/NoorHar/pen/rNNQmZV";
   if(eve.target.outerText  == "Endless List")
       window.location = "https://codepen.io/NoorHar/pen/yLLZpOa?editors=1111";
    if(eve.target.outerText == "Todo List")
       window.location = "https://codepen.io/NoorHar/pen/gOOqmKO?editors=0010";
    if(eve.target.outerText == "Remove Node")
       window.location = "https://codepen.io/NoorHar/pen/ExxrJmb";
    if(eve.target.outerText == "Todo List - Take2")
       window.location = "https://codepen.io/NoorHar/pen/gOOqVKV";
}

const addEvent = item => 
   item.addEventListener('click', onClick);

ulElement.forEach(addEvent);