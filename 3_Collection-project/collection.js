//Create Collection
const collection = [
    {
        name: "Openda",
        nationality: "Belgium",
        competition: "Eredevisie",
        club: "Vitesse",
        age: 2000,
        position: "Striker",
        foot: "Right",
        picture: "./images/Openda.png"
    
    },
    {
        name: "Lukaku",
        nationality: "Belgium",
        competition: "Premier League",
        club: "Chelsea",
        age: 1993,
        position: "Striker",
        foot: "Left",
        picture: "./images/Lukaku.png"
    },
    {
        name: "Mertens",
        nationality: "Belgium",
        competition: "Serie A Tim",
        club: "Napoli",
        age: 1987,
        position: "Striker",
        foot: "Right",
        picture: "./images/Mertens.png"
    },
    {
        name: "De Bruyne",
        nationality: "Belgium",
        competition: "Premier League",
        club: "Manchester City",
        age: 1991,
        position: "Midfielder",
        foot: "Right",
        picture: "./images/DeBruyne.png"
    },
    {
        name: "Witsel",
        nationality: "Belgium",
        competition: "Bundesliga",
        club: "Dortmund",
        age: 1989,
        position: "Midfielder",
        foot: "Right",
        picture: "./images/Witsel.png"
    },
    {
        name: "Kanté",
        nationality: "France",
        competition: "Premier League",
        club: "Chelsea",
        age: 1991,
        position: "Midfielder",
        foot: "Right",
        picture: "./images/Kante.png"
    },
    {
        name: "Davies",
        nationality: "Canada",
        competition: "Bundesliga",
        club: "FC Bayern",
        age: 2000,
        position: "Defender",
        foot: "Left",
        picture: "./images/Davies.png"
    },
    {
        name: "Upamecano",
        nationality: "France",
        competition: "Bundesliga",
        club: "FC Bayern",
        age: 1998,
        position: "Defender",
        foot: "Right",
        picture: "./images/Upamecano.png"
    },
    {
        name: "Kimpembe",
        nationality: "France",
        competition: "Ligue 1",
        club: "Paris SG",
        age: 1995,
        position: "Defender",
        foot: "Left",
        picture: "./images/Kimpembe.png"
    },
    {
        name: "Hakimi",
        nationality: "Morocco",
        competition: "Ligue 1",
        club: "Paris SG",
        age: 1998,
        position: "Defender",
        foot: "Right",
        picture: "./images/Hakimi.png"
    },
    {
        name: "Neuer",
        nationality: "Germany",
        competition: "Bundesliga",
        club: "FC Bayern",
        age: 1986,
        position: "Goalkeeper",
        foot: "Right",
        picture: "./images/Neuer.png"
    },
    {
        name: "Chong",
        nationality: "Netherlands",
        competition: "EFL Championship (ENG 2)",
        club: "Birmingham City",
        age: 1999,
        position: "Super Sub",
        foot: "Left",
        picture: "./images/Chong.png"
    },
]

for( let i = 0; i < collection.length ; i++){
const newDiv = document.createElement("div");//create a new div
newDiv.className ="card"; // add classname to div
const section = document.querySelector("section");//Select section
section.appendChild(newDiv);//append newDiv to section

/*const newImg = document.createElement("img"); // create a element for img
newImg.src = collection[i].picture; // link img to src
newDiv.appendChild(newImg); // append img to new Div*/


const newTitle = document.createElement("h1");//create h1 for name
newTitle.className= "Title"
newDiv.appendChild(newTitle);//append name in newdiv
newTitle.innerHTML = collection[i].name;// display name in h1

const newPCountry = document.createElement("p"); //create p 
newPCountry.className="Country"
newDiv.appendChild(newPCountry); // append p into newDiv
newPCountry.innerHTML = "Country:"+ " " + collection[i].nationality;//give text to p

const newPComp = document.createElement("p"); //create p 
newPComp.className="Competition";
newDiv.appendChild(newPComp); // append p into newDiv
newPComp.innerHTML = "Competition:" + " " + collection[i].competition;//give text to p

const newPClub = document.createElement("p")
newPClub.className = "Club";
newDiv.appendChild(newPClub);
newPClub.innerHTML = "Club:" + " " + collection[i].club;

const newPAge = document.createElement("p");
newPAge.className= "age";
newDiv.appendChild(newPAge);
newPAge.innerHTML = "Born in:"+ " " + collection[i].age;

const newPPosition = document.createElement("p");
newPPosition.className = "Position";
newDiv.appendChild(newPPosition);
newPPosition.innerHTML ="Position:" + " " + collection[i].position;

const newPFoot = document.createElement("p");
newPFoot.className= "Foot";
newDiv.appendChild(newPFoot);
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
newDiv.style.backgroundImage = "url(" + collection[i].picture +")";

}




