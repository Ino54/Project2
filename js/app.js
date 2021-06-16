//Help to enlarge the image on which we click in order to see it better/

function imgSilder(anything) {
    document.querySelector(".Pagne").src = anything;
}

//allows the change of the background color after clicking on a dress
function changeCircleColor(color) {
    const circle = document.querySelector(".circle");
    circle.style.background = color;
}

function toggleMenu() {
    var menuToggle = document.querySelector(".toggle");
    var navigation = document.querySelector(".navigation");
    menuToggle.classList.toggle("active");
    navigation.classList.toggle("active");
}

