const mobileBtn = document.getElementById("mobile-cta");
nav = document.querySelector("nav");
mobileBtnExit = document.getElementById("mobile-exit");

mobileBtn.addEventListener("click", () => {
    nav.classList.add("menu-btn");
});

mobileBtnExit.addEventListener("click", () => {
    nav.classList.remove("menu-btn");
});

const heroContainer = document.getElementById("opening");
const heroList = document.getElementById("pa-list");
const getStarted = document.getElementById("primary-cta");

getStarted.addEventListener("click", () => {
    heroContainer.style.display = "none";
    heroList.style.display = "block";
});