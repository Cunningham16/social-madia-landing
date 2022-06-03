const navContainer = document.querySelector(".navigator-fixed")
const upButton = document.querySelector('.up-nav')
const navElementsFixed = document.querySelectorAll(".navigator-fixed__element")
const footer = document.querySelector(".download-app")

const blockBlog = document.querySelector(".blog-section")
const blockFeatures = document.querySelector(".features-section")
const blockStories = document.querySelector(".stories-block")
const blockCommunity = document.querySelector(".community-section")

const featurePos = blockFeatures.getBoundingClientRect().top + window.pageYOffset
const storiesPos = blockStories.getBoundingClientRect().top + window.pageYOffset
const communityPos = blockCommunity.getBoundingClientRect().top + window.pageYOffset
const blogPos = blockBlog.getBoundingClientRect().top + window.pageYOffset
let body = document.querySelector("body")

const header = document.querySelector("header")

upButton.onclick = function(){
    header.scrollIntoView({
        behavior: "smooth",
    })
}

function renderNav(){
    let a = window.pageYOffset;
    
    if(a >= featurePos && a <= storiesPos){
        focusSectionNav(0)
        animationShowNav()
    }else if(a >= storiesPos && a < communityPos){
        focusSectionNav(1)
    }else if(a > communityPos && a <= blogPos){
        focusSectionNav(2)
    }else if(a >= blogPos && a < 5500){
        focusSectionNav(3)
        animationShowNav()
    }else if(a < featurePos){
        animationHideNav();
    }else{
        animationHideNav();
    }
}

setInterval(renderNav(), 1000)

function animationHideNav(){
    navContainer.style.transform = "translate(0, 200%)"
}

function animationShowNav(){
    navContainer.style.transform = "translate(0, 0)"
}

window.addEventListener("scroll",() => {
    renderNav()
})

function focusSectionNav(elem){
    let active = document.querySelector(".navigator-fixed__element_active")
    let btnActive = document.querySelector(".navigate-button_active")
    btnActive.classList.remove("navigate-button_active")
    btnActive.classList.add("navigate-button")
    active.classList.remove("navigator-fixed__element_active")

    navElementsFixed[elem].classList.add("navigator-fixed__element_active")
    let btn = navElementsFixed[elem].querySelector(".navigate-button")
    btn.classList.remove("navigate-button")
    btn.classList.add("navigate-button_active")
}

let arr_nav = []
let arr_nav_top = []

for(let button of navElementsFixed){
    arr_nav.push(button)   
}

let navElementsTop = document.querySelectorAll(".nav__element")

for(let button of navElementsTop){
    arr_nav_top.push(button)   
}

function deployScroll(index){
    if(index === 0){
        blockFeatures.scrollIntoView({
            behavior: "smooth",
        })
    }else if(index === 1){
        blockStories.scrollIntoView({
            behavior: "smooth",
        })
    }else if(index === 2){
        blockCommunity.scrollIntoView({
            behavior: "smooth",
        })
    }else if(index === 3){
        blockBlog.scrollIntoView({
            behavior: "smooth",
        })
    }
}

for(let button of arr_nav){
    button.onclick = function(){
        let index = arr_nav.indexOf(button)

        focusSectionNav(index)

        deployScroll(index)
    }
}

for(let i of arr_nav_top){
    i.onclick = function(e){
        e.preventDefault()
        let index = arr_nav_top.indexOf(i)

        deployScroll(index)
    }
}