import { collection } from "./collection.js";
import { database } from "./collection.js";

let userNamePrompt = prompt("Whats your username? Hint it's jordy"); //store usernamepromt in a var
let passwordPrompt = prompt("What's your password? Hint it's secret");//store passwordpromt in a var

function singIn(username,password){ // create (declare a function)
  if (username === database[0].username // if username = database username
    && password===database[0].password){ // and if password == database password
    document.body.style.visibility = "visible"; // display body 
  } else{ // else alertbox 
  alert("sorry, Wrong Username and/or password");
  }
}
singIn(userNamePrompt,passwordPrompt); // use function


for( let i = 0; i < collection.length ; i++){
    //create a new div
    const newDiv = document.createElement("div");
    // add classname to div
    newDiv.className ="card"; 
    //apend to right row in function of position
    if(collection[i].position === "Striker"){
        let rowselctor = document.querySelector(".row-attack");
        rowselctor.appendChild(newDiv);
    }
    else if(collection[i].position === "Midfielder"){
        let rowselctor = document.querySelector(".row-midfield");
        rowselctor.appendChild(newDiv);
    }
    else if(collection[i].position === "Defender"){
        let rowselctor = document.querySelector(".row-defence");
        rowselctor.appendChild(newDiv);
    }
    else if(collection[i].position === "Goalkeeper"){
        let rowselctor = document.querySelector(".row-goalie");
        rowselctor.appendChild(newDiv);
    }
    else{
        let rowselctor = document.querySelector(".row-sub");
        rowselctor.appendChild(newDiv);
    }
    const textContainer = document.createElement("div");
    textContainer.className = "text-container";
    newDiv.appendChild(textContainer);

    const newTitle = document.createElement("h1");//create h1 for name
    newTitle.className= "Title"
    textContainer.appendChild(newTitle);//append name in newdiv
    newTitle.innerHTML = collection[i].name;// display name in h1
    
    const newPCountry = document.createElement("p"); //create p 
    newPCountry.className="Country"
    textContainer.appendChild(newPCountry); // append p into newDiv
    newPCountry.innerHTML = "Country:"+ " " + collection[i].nationality;//give text to p
    
    const newPComp = document.createElement("p"); //create p 
    newPComp.className="Competition";
    textContainer.appendChild(newPComp); // append p into newDiv
    newPComp.innerHTML = "Competition:" + " " + collection[i].competition;//give text to p
    
    const newPClub = document.createElement("p")
    newPClub.className = "Club";
    textContainer.appendChild(newPClub);
    newPClub.innerHTML = "Club:" + " " + collection[i].club;
    
    const newPAge = document.createElement("p");
    newPAge.className= "age";
    textContainer.appendChild(newPAge);
    newPAge.innerHTML = "Born in:"+ " " + collection[i].age;
    
    const newPPosition = document.createElement("p");
    newPPosition.className = "Position";
    textContainer.appendChild(newPPosition);
    newPPosition.innerHTML ="Position:" + " " + collection[i].position;
    
    const newPFoot = document.createElement("p");
    newPFoot.className= "Foot";
    textContainer.appendChild(newPFoot);
    newPFoot.innerHTML = "Preferred foot:" + " " + collection[i].foot;
    
    
    
    let align = document.getElementsByClassName("Foot"); //get element foot
    
    // create if/else function for value of Foot If value of foot is Right
    if(collection[i].foot === "Right"){
    
        // align item right
        align[i].style.textAlign ="right";
    
        //align item left
    } else{
        align[i].style.textAlign ="left";
    }
    
    //create bg-color for every possition
    
    if(collection[i].position === "Striker"){
        newDiv.style.border = "2px solid blue";
    }
    else if(collection[i].position === "Midfielder"){
        newDiv.style.border = "2px solid yellow";
    }
    else if(collection[i].position === "Defender"){
        newDiv.style.border = "2px solid brown";
    }
    else if(collection[i].position === "Goalkeeper"){
        newDiv.style.border = "2px solid pink";
    }
    else{
        newDiv.style.border = "2px solid gold";
    }
    //give background image of player to card
    newDiv.style.backgroundImage = "url(" + collection[i].picture +")";
    
    }


