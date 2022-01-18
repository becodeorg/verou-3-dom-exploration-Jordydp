//get element by id firstname
const firstName = document.getElementById("firstname");

//formule
const adding = (event) => {

    //event.preventDefault(); enkel nodig bij submit knop
    // x = input value of firstName
    const x = firstName.value;
    // y = get element by id display - firstname
    const y = document.getElementById("display-firstname");
    // add x to y
    y.innerHTML = x;

}
// use function adding on keyup
firstName.addEventListener('keyup' , adding);

