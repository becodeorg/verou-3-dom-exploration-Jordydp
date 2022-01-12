const names =[ "Ahmad","Jian", "Michael", "Dante", "Muhammet", "Nicolas", "Beryl", "Cynthia","Ruben","Magali", "Jawid","Koen","Kevin","Benjamin","Dery","Michelle", "colin","Feruz", "Pierter", "Ellen", "Sara"];
const shuffledPeople = names.sort((a, b) => 0.5 - Math.random());

function random_bg_color() { //create function
    var x = Math.floor(Math.random() * 256); //generate 1ste rbg color (Var x  Math.floor =
    var y = Math.floor(Math.random() * 256);//generate 2nd rbg color
    var z = Math.floor(Math.random() * 256); //generate 3th rbg color
    var bgColor = "rgb(" + x + "," + y + "," + z + ")"; // putting x y z on the respective place in rbg
 console.log(bgColor);// display rgb
 return bgColor;    
}

function getTextColor(rgba) {
    rgba = rgba.match(/\d+/g);
    if((rgba[0]*0.299)+(rgba[1]*0.587)+(rgba[2]*0.114)>127) {
      return 'black';
    } else {
      return 'white';
    }
  }



function addSection(name) {
    const newSec = document.createElement("section"); // create a section
    newSec.style.backgroundColor = random_bg_color(); //give bgcolor to section
    newSec.style.color= getTextColor(newSec.style.backgroundColor); // uses function on color of newSec.style.backgroundColor
    const art = document.querySelector("article"); // look for article
    art.appendChild(newSec); //append newSec to article    
    const heading = document.createElement("p"); // create p element
    newSec.appendChild(heading); //adding p element to section
    const txt1 = document.createTextNode(name); //create text 
    heading.appendChild(txt1);// adding text to p element
}


for(let i=0; i < names.length ; i++){
    const name = names[i];//declare var for items in array
    addSection(name);//use function for each name   
}

/*names.forEach((name) => addSection(name));
names.forEach((name) => {

})*/

