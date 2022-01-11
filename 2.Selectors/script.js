const selected = document.querySelectorAll(".important");//select all items with important class
for( let item = 0 ; item < selected.length ; item ++){ //create array
    // var i start van first item from array = 0, compare i with the lenght of the list important, aslong 
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

const par = document.querySelectorAll('p'); //select all P tags
for(let i = 0; i < par.length; i++){ // create array
    console.log(par [i]);
    if(par[i].className)
        console.log(par[i].innerText);
    else {
        /*var randomcolor = Math.floor(Math.random() * 16777215).toString(16);
        par[i].style.color ="#" + randomcolor;*/
        function random_bg_color() { //create function
            var x = Math.floor(Math.random() * 256); //generate 1ste rbg color (Var x  Math.floor =
            var y = Math.floor(Math.random() * 256);//generate 2nd rbg color
            var z = Math.floor(Math.random() * 256); //generate 3th rbg color
            var bgColor = "rgb(" + x + "," + y + "," + z + ")"; // putting x y z on the respective place in rbg
            console.log(bgColor);// display rgb          
            par[i].style.background = bgColor; // change bg color to random rbg
        }        
        random_bg_color(); //use Function 
    }
}
