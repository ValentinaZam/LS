import './index.css';

const buttonCookie = document.querySelector('.cookie-consent__button');
const cookieElement = document.querySelector('.cookie-consent');
const classHide = "hide";

if(localStorage.getItem("cookieClassDelete")){
    cookieElement.classList.add(classHide);
}else{
    buttonCookie.addEventListener('click', () => {
        cookieElement.classList.add(classHide);
        localStorage.setItem("cookieClassDelete", classHide);
    })
}

