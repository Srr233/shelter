const NAVIGATION = document.body.querySelector(".header__nav");
const BURGER_BTN = document.body.querySelector(".header__burger");
const A_LINKS = document.body.querySelectorAll("a");

BURGER_BTN.addEventListener("click", e => {
    const element = e.target.tagName == "BUTTON" ? e.target : e.target.parentElement;
    Array.from(element.children).forEach(span => span.classList.toggle("active"));
    Array.from(A_LINKS).forEach(link => link.classList.toggle("active"));
    NAVIGATION.classList.toggle("active");
})

window.addEventListener('scroll', function() {
    const elem = document.querySelector('.header__wrapper');
  if (pageYOffset === 0) {
      elem.classList.toggle("top");
  } else {
      elem.classList.add("top");
  }
});