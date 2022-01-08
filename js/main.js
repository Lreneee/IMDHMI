const desk1 = document.getElementById("desk1");
const popup1 = document.getElementById("popup1");

let popup1Visible = false;
desk1.onmouseenter = () => {
    setTimeout(showPopup, 500);
}
desk1.onmouseleave = () => {
    setTimeout(hidePopup, 500);
}

const showPopup = () => {
    popup1.setAttribute("visible", "true");
}
const hidePopup = () => {
    popup1.setAttribute("visible", "false");
}