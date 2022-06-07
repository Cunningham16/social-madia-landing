const registrationForm = document.forms.registration
const checkbox = registrationForm.checkbox
const password = registrationForm.password
const repeatPass = registrationForm.repeatPass
const email = registrationForm.email
const name = registrationForm.name
const buttonSubmit = document.querySelector(".button-submit")

function checkPass(){
    if(password.value === repeatPass.value){
        repeatPass.classList.remove("error__password")
        return true
    }else{
        repeatPass.classList.add("error__password")
        return false
    }
}

function checkEmail(){
    if(email.value.includes("@gmail.com") || email.value.includes("@tut.by") || email.value.includes("@yandex.ru")){
        email.classList.remove("error__password")
        return true
    }else{
        email.classList.add("error__password")
        return false
    }
}

email.oninput = () => {
    checkEmail()
}

password.oninput = () => {
    checkPass()
}

repeatPass.oninput = () => {
    checkPass()
}

function checkCheckbox(){
    if(checkbox.checked){
        return true
    }else{
        return false
    }
}

registrationForm.onchange = () => {
    if(checkPass() && checkCheckbox() && checkEmail() && name.value != ""){
        buttonSubmit.disabled = false
    }else{
        buttonSubmit.disabled = true
    }
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