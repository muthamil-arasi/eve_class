 let click = 1;

document.addEventListener("click", (event) => {

    if( clicks %2 == 0){
         event.target.innerText = "O";
    }
    else{
        event.target.innerText = "X";
    }
    clicks++;
    
   console.log(clicks)
})