const sliderButtonPrev = document.querySelector(".prev-button")
const sliderButtonNext = document.querySelector(".next-button")

const slides = document.querySelectorAll(".slider__card")

let currentSlide = 0
let sliderArr = []

for(let elem of slides){
    sliderArr.push(elem)
}

function animateActiveSlideLeft(elem){
    elem.style.transition = "0.3s"
    elem.style.transform = "translate(-200%, 0)"
    elem.style.opacity = "0"
    setTimeout(() => {
        elem.classList.remove("slider__card_active")    
    }, 300)
}

function animateSlideRight(elem){
    elem.classList.add("slider__card_active")
    elem.style.transition = "0.3s"
    elem.style.transform = "translate(200%, 0)"
    elem.style.opacity = "0"
    
    setTimeout(() => {
        elem.style.transform = "translate(0, 0)"
        elem.style.opacity = "1"
    }, 300)
}

function animateActiveSlideRight(elem){
    elem.style.transition = "0.3s"
    elem.style.transform = "translate(200%, 0)"
    elem.style.opacity = "0"
    setTimeout(() => {
        elem.classList.remove("slider__card_active")    
    }, 300)
}

function animateSlideLeft(elem){
    elem.classList.add("slider__card_active")
    elem.style.transition = "0.3s"
    elem.style.transform = "translate(-200%, 0)"
    elem.style.opacity = "0"
    
    setTimeout(() => {
        elem.style.transform = "translate(0, 0)"
        elem.style.opacity = "1"
    }, 300)
}

sliderButtonNext.addEventListener("click", () => {
    if(currentSlide === 2){
        currentSlide = 0
    }else if(currentSlide < 2){
        currentSlide++
    }
    console.log(currentSlide)

    for(let a of sliderArr){
        if(a.classList.contains("slider__card_active") === true){
            animateActiveSlideLeft(a)
        }
    }

    animateSlideRight(sliderArr[currentSlide])
})

sliderButtonPrev.addEventListener("click", () => {
    if(currentSlide === 0){
        currentSlide = 2
    }else if(currentSlide > 0){
        currentSlide--
    }
    console.log(currentSlide)

    for(let a of sliderArr){
        if(a.classList.contains("slider__card_active") === true){
            animateActiveSlideRight(a)
        }
    }

    animateSlideLeft(sliderArr[currentSlide])
})