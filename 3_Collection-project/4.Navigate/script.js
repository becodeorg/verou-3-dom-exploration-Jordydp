/*
    Select the last child of the <ol> tag and put it at the beginning of the list
    Move the <h2> of the third section in the second one and vice-versa
    Delete the last section from the DOM, we don't need it anyways
*/

//Select the last child of the <ol> and put it in the beginning of the list
//select ol
const ol = document.querySelector("ol"); 
// a = first child of ol
const a = ol.children[0]; 
// b = last child of ol
const b = ol.children[4];
//re-arange b before a 
ol.insertBefore(b,a);

//move H2 of the third section in the second one and vice versa

//select all section

const section = document.querySelectorAll("section");
// select first section children
const sectionChildren = section[0].children;

//select h2 in firstt section
const h2 = section[0].children[0];
//select h2 in second section
const h2Sec1 = section[1].children[0];
//append h2 from section1 to section 2
section[1].appendChild(h2);
//append h2 from section 2 to section 1
section[0].appendChild(h2Sec1);


//Delete the last section from the DOM, we don't need it anyways

const Section3 = section[2];
Section3.remove();





