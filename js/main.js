const desk1 = document.getElementById("desk1");
const desk2 = document.getElementById("desk2");

const popup1 = document.getElementById("popup1");
const popup2 = document.getElementById("popup2");

desk1.onmouseenter = () => {
    setTimeout(showPopup, 500);
}
desk1.onmouseleave = () => {
    setTimeout(hidePopup, 5000);
}

desk2.onmouseenter = () => {
    setTimeout(showPopup2, 500);
}
desk2.onmouseleave = () => {
    setTimeout(hidePopup2, 5000);
}

const showPopup = () => {
    popup1.setAttribute("visible", "true");
}
const hidePopup = () => {
    popup1.setAttribute("visible", "false");
}
const showPopup2 = () => {
    popup2.setAttribute("visible", "true");
}
const hidePopup2 = () => {
    popup2.setAttribute("visible", "false");
}