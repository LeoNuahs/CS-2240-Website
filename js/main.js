const mobileBtn = document.getElementById("mobile-cta");
nav = document.querySelector("nav");
mobileBtnExit = document.getElementById("mobile-exit");

mobileBtn.addEventListener("click", () => {
    nav.classList.add("menu-btn");
});

mobileBtnExit.addEventListener("click", () => {
    nav.classList.remove("menu-btn");
});

var button = document.getElementById('right-arrow');
button.onclick = function () {
    var container = document.getElementById('topics');
    sideScroll(container,'right', 5, 100, 50);
};

var back = document.getElementById('left-arrow');
back.onclick = function () {
    var container = document.getElementById('topics');
    sideScroll(container,'left', 5, 100, 50);
};

function sideScroll(element, direction, speed, distance, step){
    scrollAmount = 0;

    var slideTimer = setInterval(function(){
        if(direction == 'left'){
            element.scrollLeft -= step;
        } else {
            element.scrollLeft += step;
        }

        scrollAmount += step;
        if(scrollAmount >= distance){
            window.clearInterval(slideTimer);
        }
    }, speed);
}