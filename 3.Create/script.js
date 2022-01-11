function addSection(){
    const newSec = document.createElement("section");
    newSec.style.backgroundColor = "red";
    document.body.appendChild(newSec);
    const heading = document.createElement("h1");
    const txt1 = document.createTextNode("Nicolas");
    newSec.appendChild(txt1);
    document.getElementsByName("article");   
    
}
addSection();