const firstSlide = document.querySelector(".main__section_first")
const secondSlide = document.querySelector(".main__section_second")
const thirdSlide = document.querySelector(".main__section_third")

let arraySlides = [firstSlide, secondSlide, thirdSlide]

const buttonsSlider = document.querySelectorAll(".pagination__link-element")

let arrButtons = []
for(let button of buttonsSlider){
    arrButtons.push(button)
}

function changeButton(index){
    let activeBtn = document.querySelector(".pagination__link-element_active")
    activeBtn.classList.remove("pagination__link-element_active")

    let pushBtn = arrButtons[index].querySelector("h3")
    pushBtn.classList.add("pagination__link-element_active")
}

function animateHidingSlide(slide){
    let h1 = slide.querySelector("h1")
    let h3 = slide.querySelector("h3")
    let buttons = slide.querySelector(".buttons__mobile__download")
    let image = slide.querySelector(".main__page__image")

    let arr = [h1, h3, buttons, image]

    for(let element of arr){
        element.style.transition = "1s"
        element.style.transform = "translate(0, 100%)"
        element.style.opacity = "0"
    }
}

function animateShowSlide(index){
    let h1 = arraySlides[index].querySelector("h1")
    let h3 = arraySlides[index].querySelector("h3")
    let buttons = arraySlides[index].querySelector(".buttons__mobile__download")
    let image = arraySlides[index].querySelector(".main__page__image")

    let arr = [h1, h3, buttons, image]

    for(let element of arr){
        element.style.transition = "0.9s"
        element.style.transform = "translate(0, 100%)"
        element.style.opacity = "0"
    }

    setTimeout(function(){
        for(let element of arr){
            element.style.transform = "translate(0, 0)"
            element.style.opacity = "1"
        }
    }, 200)
}

function changeMainPage(index){
    for(let slide of arraySlides){
        if(slide.classList.contains("hidden") === false){
            animateHidingSlide(slide)
            slide.classList.add("hidden")
        }
    }
    arraySlides[index].classList.remove("hidden")
    animateShowSlide(index)
}

for(let button of arrButtons){
    button.addEventListener("click", () => {
        let index = arrButtons.indexOf(button)
        changeButton(index)
        changeMainPage(index)
    })
}

document.addEventListener("DOMContentLoaded", function(){
    let h1 = arraySlides[0].querySelector("h1")
    let h3 = arraySlides[0].querySelector("h3")
    let buttons = arraySlides[0].querySelector(".buttons__mobile__download")
    let image = arraySlides[0].querySelector(".main__page__image")

    let arr = [h1, h3, buttons, image]

    for(let element of arr){
        element.style.transition = "0s"
        element.style.transform = "translate(0, 100%)"
        element.style.opacity = "0"
    }

    setTimeout(() => {
        animateShowSlide(0)
    }, 300)
})