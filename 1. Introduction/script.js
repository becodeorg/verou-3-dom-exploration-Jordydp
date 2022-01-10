console.log(document.title) //Display Title
document.title="Modifying the DOM" // Change Title
document.body.style.background ="#FF69B4"; // change background color


function random_bg_color() { //create function
    var x = Math.floor(Math.random() * 256); //generate 1ste rbg color (Var x  Math.floor =
    var y = Math.floor(Math.random() * 256);//generate 2nd rbg color
    var z = Math.floor(Math.random() * 256); //generate 3th rbg color
    var bgColor = "rgb(" + x + "," + y + "," + z + ")"; // putting x y z on the respective place in rbg
 console.log(bgColor);// display rgb
  
    document.body.style.background = bgColor; // change bg color to random rbg
    }

random_bg_color(); //use Function 

document.body.children //display children of body

const Children = document.body.children; // make Variable of all children of body
for(let item of Children){ //creating a var (item) of every element of var (children = document.body.children)
console.log(item)} // display every item created






