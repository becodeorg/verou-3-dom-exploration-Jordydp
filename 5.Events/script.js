const _initTime = Date.now()

function getElapsedTime(){
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}
function createsquare(event){
  //select displayedsquare-wrapper
    const section = document.querySelector(".displayedsquare-wrapper");
    //create new div
    const newDiv = document.createElement("div");
    //add classnames e.target.classList[1] = color
    newDiv.className = "displayedsquare" + " " + event.target.classList[1];
    // append div to section
    section.appendChild(newDiv);
    // create var to select displayedsquare
    const displayedsquares = document.querySelectorAll('.displayedsquare')
    //create loop to when displayedsquare is clicked use function msg
    for(let displayedsquare of displayedsquares){
      displayedsquare.addEventListener('click', msg);
  }
    }
    
    

function clickOnSquare(event){
  console.log(event.target.classList[1]);
  console.log(getElapsedTime());
  //select ul
  const ul = document.querySelector("ul");
  // create Element li
  let newLi = document.createElement("li");
  // create string with time and square
  newLi.innerHTML = "[" + getElapsedTime() + "]" + " " + "Created a new" + " " + event.target.classList[1] + " " + "square";  
  ul.appendChild(newLi);
  
  
}

const actionsquares = document.querySelectorAll('.actionsquare')
for(let actionsquare of actionsquares){
  actionsquare.addEventListener('click', clickOnSquare)
  actionsquare.addEventListener('click', createsquare)
}
function spaceColor(){
    const ul = document.querySelector("ul");
    // create Element li
    let newLi = document.createElement("li");
    // create string with time and square
    newLi.innerHTML = "[" + getElapsedTime() + "]" + " " + "The background color is" + " " + random_bg_color();  
    ul.appendChild(newLi);
}
function random_bg_color() { //create function
    let x = Math.floor(Math.random() * 256); //generate 1ste rbg color (Var x  Math.floor =
    let y = Math.floor(Math.random() * 256);//generate 2nd rbg color
    let z = Math.floor(Math.random() * 256); //generate 3th rbg color
    let bgColor = "rgb(" + x + "," + y + "," + z + ")"; // putting x y z on the respective place in rbg
    console.log(bgColor);// display rgb
    //select body
    const body = document.querySelector("body");
    //apply body color
    body.style.backgroundColor = bgColor;
    //return the rbg color
    return bgColor;
} 


//create function to remove li
function removeli() {
  //select al li
    let li = document.querySelectorAll("li");
    //loop through all li (on a strange loop)
    for(let i = li.length - 1; i >= 0; --i){ 
      //remove all li
    li[i].remove();
}
}
//create function to remove div
function removeDiv() {
  //select all divs by classname displayedsquare
  let div = document.querySelectorAll(".displayedsquare");
  //same strange loop
  for(let i = div.length - 1; i >= 0; --i){
    //remove al divs in loop
    div[i].remove();
  }
}
// create event on key up
document.addEventListener('keyup', event => {
  //if space then use function
  if (event.code === 'Space') {
    random_bg_color();
    spaceColor();
  }
  //if key i use function
  if(event.code === 'KeyI'){
    removeli();
  }
  // if key s use function
  if(event.code === 'KeyS'){
    removeDiv();
  }
})

//alert message with color of displayed square
function msg(event){
  color = event.target.classList[1];
  alert(color);
}




