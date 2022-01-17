const _initTime = Date.now()

function getElapsedTime(){
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}
function createsquare(e){
    const section = document.querySelector(".displayedsquare-wrapper");
    const newDiv = document.createElement("div");
    newDiv.className = "displayedsquare" + " " + e.target.classList[1];
    section.appendChild(newDiv);
    }
    
    

function clickOnSquare(e){
  console.log(e.target.classList[1]);
  console.log(getElapsedTime());
  //select ul
  const ul = document.querySelector("ul");
  // create Element li
  let newLi = document.createElement("li");
  // create string with time and square
  newLi.innerHTML = "[" + getElapsedTime() + "]" + " " + "Created a new" + " " + e.target.classList[1] + " " + "square";  
  ul.appendChild(newLi);
}

const actionsquares = document.querySelectorAll('.actionsquare')
for(let actionsquare of actionsquares){
  actionsquare.addEventListener('click', clickOnSquare)
  actionsquare.addEventListener('click', createsquare)
}
function random_bg_color() { //create function
    let x = Math.floor(Math.random() * 256); //generate 1ste rbg color (Var x  Math.floor =
    let y = Math.floor(Math.random() * 256);//generate 2nd rbg color
    let z = Math.floor(Math.random() * 256); //generate 3th rbg color
    let bgColor = "rgb(" + x + "," + y + "," + z + ")"; // putting x y z on the respective place in rbg
    console.log(bgColor);// display rgb
    const body = document.querySelector("body");
    body.style.backgroundColor = bgColor;
} 

document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
      random_bg_color();
    }
  })




