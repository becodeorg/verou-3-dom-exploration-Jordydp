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
  console.log(e.target.classList[1])
  console.log(getElapsedTime())
}

const actionsquares = document.querySelectorAll('.actionsquare')
for(let actionsquare of actionsquares){
  actionsquare.addEventListener('click', clickOnSquare)
  actionsquare.addEventListener('click', createsquare)
}





