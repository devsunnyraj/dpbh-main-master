imgContainer = document.querySelector('.img-container')
images = document.querySelectorAll('.img-container img')

lt = document.getElementById("prevBtn")
gt = document.getElementById("nextBtn")

counter = 0
imgWidth = images[0].clientWidth

imgContainer.style.transform = "translateX("+(counter*imgWidth)+"px)"

const imgSlideFunction = ()=>{
    counter++
    imgContainer.style.transform = "translateX("+(-counter*imgWidth)+"px)"
    if(counter==images.length-1){
        counter=0
    }
}

let imgSlideInterval = setInterval(imgSlideFunction,3000)

lt.addEventListener('click',()=>{
    if(counter==0){
        counter=images.length
    }
    counter--
    imgContainer.style.transform = "translateX("+(-counter*imgWidth)+"px)"
    clearInterval(imgSlideInterval)
    imgSlideInterval= setInterval(imgSlideFunction,3000)
})

gt.addEventListener('click',()=>{
    if(counter==images.length-1){
        counter=0
    }
    counter++
    imgContainer.style.transform = "translateX("+(-counter*imgWidth)+"px)"
    clearInterval(imgSlideInterval)
    imgSlideInterval=setInterval(imgSlideFunction,3000)
})

    

searchButton = document.querySelector(".searchButton")

ol= document.querySelector(".alternating-colors")

loadingCircle = document.querySelector(".loading-circle")

searchButton.addEventListener('click',()=>{
    loadingCircle.style.opacity = "1"
    setTimeout(()=>{
        loadingCircle.style.opacity = "0"
        ol.style.opacity = "1"
        ol.style.pointerEvents = "all"
    },8000)
})