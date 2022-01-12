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
    },
    {
        name: "Mertens",
        nationality: "Belgium",
        competition: "Serie A Tim",
        club: "Napoli",
        age: 1987,
        position: "Striker",
        foot: "Right",
    },
    {
        name: "De Bruyne",
        nationality: "Belgium",
        competition: "Premier League",
        club: "Manchester City",
        age: 1991,
        position: "Midfielder",
        foot: "Right",
    },
    {
        name: "Witsel",
        nationality: "Belgium",
        competition: "Bundesliga",
        club: "Dortmund",
        age: 1989,
        position: "Midfielder",
        foot: "Right",
    },
    {
        name: "Kanté",
        nationality: "France",
        competition: "Premier League",
        club: "Chelsea",
        age: 1991,
        position: "Midfielder",
        foot: "Right",
    },
    {
        name: "Davies",
        nationality: "Canada",
        competition: "Bundesliga",
        club: "FC Bayern",
        age: 2000,
        position: "Defender",
        foot: "Left",
    },
    {
        name: "Upamecano",
        nationality: "France",
        competition: "Bundesliga",
        club: "FC Bayern",
        age: 1998,
        position: "Defender",
        foot: "Right",
    },
    {
        name: "Kimpembe",
        nationality: "France",
        competition: "Ligue 1",
        club: "Paris SG",
        age: 1995,
        position: "Defender",
        foot: "Left",
    },
    {
        name: "Hakimi",
        nationality: "Morocco",
        competition: "Ligue 1",
        club: "Paris SG",
        age: 1998,
        position: "Defender",
        foot: "Right",
    },
    {
        name: "Neuer",
        nationality: "Germany",
        competition: "Bundesliga",
        club: "FC Bayern",
        age: 1986,
        position: "Goalkeeper",
        foot: "Right",
    },
    {
        name: "Chong",
        nationality: "Netherlands",
        competition: "EFL Championship (ENG 2)",
        club: "Birmingham City",
        age: 1999,
        position: "Midfielder",
        foot: "Left",
    },
]

console.log(collection[0].picture);

const newImg = document.createElement("img");
newImg.src = collection[0].picture;
document.body.appendChild(newImg);

//display collection on website
/*
const newDiv = document.createElement("div");
newDiv.innerHTML = collection[1];
document.body.appendChild(newDiv);*/

