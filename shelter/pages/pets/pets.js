"Use strict";

const NAVIGATION = document.body.querySelector(".header__nav");
const BURGER_BTN = document.body.querySelector(".header__burger");

BURGER_BTN.addEventListener("click", e => {
    const element = e.target.tagName == "BUTTON" ? e.target : e.target.parentElement;
    Array.from(element.children).forEach(span => span.classList.toggle("active"));
    NAVIGATION.classList.toggle("active");
})