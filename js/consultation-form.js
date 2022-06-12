const consultationForm = document.forms.consultation
const name = consultationForm.name
const email = consultationForm.email
const phone = consultationForm.phone
const message = consultationForm.extraInfo
const checkbox = consultationForm.checkbox
const buttonSubmit = document.querySelector(".button-submit")


const mustAreas = [name, email, phone, message]

function checkEmail(){
    if(email.value.includes("@gmail.com") || email.value.includes("@tut.by") || email.value.includes("@yandex.ru")){
        email.classList.remove("error__password")
        return true
    }else{
        email.classList.add("error__password")
        return false
    }
}

consultationForm.onchange = () => {
    if(checkCheckbox() && checkEmail() && name.value != "" && email.value != '' && phone.value != '' && message.value != ''){
        buttonSubmit.disabled = false
    }else{
        buttonSubmit.disabled = true
    }
}

function checkCheckbox(){
    if(checkbox.checked){
        return true
    }else{
        return false
    }
}

email.oninput = () => {
    checkEmail()
}

const popupContainer = document.querySelector(".popup")
const popupContent = document.querySelector(".popup__content")
const popupCloseButton = document.querySelector(".close__button")
const popupCloseBg = document.querySelector(".popup__close-content")
const openPopup = document.querySelector(".link-terms")

openPopup.addEventListener("click", (e) => {
    e.preventDefault()
    popupContainer.style.display = "flex"
    setTimeout(() => {
        popupContent.style.transform = "translate(0, 0)"
    }, 200)
})

function closePopup(){
    popupContent.style.transform = "translate(0, -200%)"
    setTimeout(() => {
        popupContainer.style.display = "none"
    }, 200)
}

popupCloseBg.addEventListener("click", (e) => {
    e.preventDefault()
    closePopup()
})

popupCloseButton.addEventListener("click", () => {
    closePopup()
})

let isOpenedBurger = false
const burgerButton = document.querySelector(".mobile-button")
const burgerInfo = document.querySelector(".hamburger__list")

function animateBurger(){
    if(isOpenedBurger === false){
        burgerInfo.style.transform = 'translate(0, 0)'
        document.querySelector("body").style.overflow = "hidden"
        isOpenedBurger = true
    }else{
        burgerInfo.style.transform = 'translate(100%, 0)'
        document.querySelector("body").style.overflow = "auto"
        isOpenedBurger = false
    }
}

burgerButton.onclick = function(){
    animateBurger()
}