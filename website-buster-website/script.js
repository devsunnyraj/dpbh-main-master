let mainh1 = document.querySelector('.typing')
let text = ["DARK PATTERNS","INTERNET POWER","INNER YOU"]

outsideindex = 0
insideindex = 0

function typeWriter(){
    let new_text = text[outsideindex].slice(0,insideindex)
    mainh1.innerText = new_text
    insideindex++
    if(insideindex==text[outsideindex].length+1){
        insideindex=0
        outsideindex++
    }
    if(outsideindex==text.length){
        outsideindex=0
    }
    setTimeout(typeWriter,400)
}

typeWriter()

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