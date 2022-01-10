const selected = document.querySelectorAll(".important");//create array with all Important class items
for( let item = 0 ; item < selected.length ; item ++){ //array overlopen voor de waarde van Important
    selected[item].setAttribute("title", "this is an important item");// alle items met important title toevoegen
    console.log(selected[item]);
}



const img = document.querySelectorAll('img'); //look for every img in document
console.log(img); //display all img in console
for( let i = 0 ; i < img.length ; i ++){ //check array starting from 0 and keep checking till last img 
    if(img[i].className != "important"){ // check if item in array classname not equal to "important"
       img[i].style.display="none"; // if the image has no classname of important change the display value to none
    }
}