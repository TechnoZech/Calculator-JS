 //selectors
let buttons = Array.from(document.querySelectorAll(".btn"));
let screen = document.querySelector(".screen");


//event listners
buttons.map(button => {
    button.addEventListener("click", calculation)
})


//Functions

function calculation(e){
    
    //Display
    let expression = screen.value;
    screen.value = expression + e.target.innerHTML;
    
    //AC
    if(e.target.innerHTML == "AC"){
        screen.value = "";
    }

    //Expression
    if(e.target.innerHTML == "="){
        screen.value = eval(expression);
    }
}