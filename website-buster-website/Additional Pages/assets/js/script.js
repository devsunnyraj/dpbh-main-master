puzzleOptions = document.querySelectorAll(".puzzles-options")


puzzleOptions.forEach(element => {
    element.addEventListener("click",()=>{
        if(element.classList.contains("right")){
            element.classList.add("option-right")
        }
        else{
            element.classList.add("option-wrong")
        }
    })
});