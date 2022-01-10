const selected = document.querySelectorAll(".important") //create array with all Important class items
for(item = "0"; item < selected.length ; item ++){ //array overlopen voor de waarde van Important
    selected[item].setAttribute("title", "this is an important item")// alle items met important title toevoegen
    
}



