//get element by id firstname
const firstName = document.getElementById("firstname");
const Age = document.getElementById("age");
const pwd = document.getElementById("pwd");
const pwdconfirm = document.getElementById("pwd-confirm");

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

//create formula to check age
const Agecheck = () =>{
    console.log(Age);
    //target element by id 
    const disp = document.getElementById("a-hard-truth");

//if value of age smaller then or equal to 18
    if( Age.value >= 18){
        
        //change style to visible
        disp.style.visibility = "visible";
    } else {
        //change style to hidden
        disp.style.visibility = "hidden";
    }
}
// on key up use function Agecheck
Age.addEventListener('keyup', Agecheck);

const passwordcheck = () =>{
    if(pwd.value.length >= 6 && pwd.value === pwdconfirm.value){

        pwd.style.background = "green";
        pwdconfirm.style.background = "green";

    }else{
        pwd.style.background = "red";
        pwdconfirm.style.background = "red";
    }
}

//pwd.addEventListener("keyup", passwordcheck);
pwdconfirm.addEventListener("keyup", passwordcheck);
