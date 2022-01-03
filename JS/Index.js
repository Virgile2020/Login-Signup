/*************************************CODE JS*********************************************/
/*************************************EFFET SUR LE CHAMPS INPUT***************************/
const textInputs = document.querySelectorAll('input');
textInputs.forEach(textInput =>{
    textInput.addEventListener("focus", ()=>{
        let parent = textInput.parentNode;
        parent.classList.add("active")
    })

    textInput.addEventListener('blur', ()=>{
        let parent = textInput.parentNode;
        parent.classList.remove('active')
    })
});

/***********************************CACHER OU AFFICHER LE MOT DE PASS*******************/
const passWordInput = document.querySelector('.password-input');
const eyeBtn = document.querySelector('.eye-btn');
eyeBtn.addEventListener("click", ()=>{
    if (passWordInput.type === "password") {
        passWordInput.type = "text";
        eyeBtn.innerHTML = "<i class='uil uil-eye'></i>"
    }else{
        passWordInput.type = "password";
        eyeBtn.innerHTML = "<i class='uil uil-eye-slash'></i>"
    }
})

/****************************PERMUTION ENTRE SIGN IN ET SIGN UP*************************/
const signUpBtn = document.querySelector(".sign-up-btn");
const signInBtn = document.querySelector(".sign-in-btn");
const signUpForm = document.querySelector(".sign-up-form");
const signInForm = document.querySelector(".sign-in-form");

signUpBtn.addEventListener("click", ()=>{
    signInForm.classList.add("hide");
    signUpForm.classList.add("show");
    signInForm.classList.remove("show")
})
signInBtn.addEventListener("click", ()=>{
    signInForm.classList.remove("hide");
    signUpForm.classList.remove("show")
    signInForm.classList.add("show")
})
