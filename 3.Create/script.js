const names =[ "Ahmad","Jian", "Michael", "Dante", "Muhammet", "Nicolas", "Beryl", "Cynthia","Ruben","Magali", "Jawid","Koen","Kevin","Benjamin","Dery","Michelle", "colin","Feruz", "Pierter", "Ellen", "Sara"]
function random_bg_color() { //create function
    var x = Math.floor(Math.random() * 256); //generate 1ste rbg color (Var x  Math.floor =
    var y = Math.floor(Math.random() * 256);//generate 2nd rbg color
    var z = Math.floor(Math.random() * 256); //generate 3th rbg color
    var bgColor = "rgb(" + x + "," + y + "," + z + ")"; // putting x y z on the respective place in rbg
 console.log(bgColor);// display rgb
 return bgColor;    
    }
function addSection(name) {
    const newSec = document.createElement("section"); // create a section
    newSec.style.backgroundColor = random_bg_color(); //give bgcolor to section
    const art = document.querySelector("article"); // loook for article
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

