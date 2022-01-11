const desk1 = document.getElementById("desk1");
const desk2 = document.getElementById("desk2");

const popup1 = document.getElementById("popup1");
const popup2 = document.getElementById("popup2");
const popup3 = document.getElementById("popup3");
const popup4 = document.getElementById("popup4");

desk1.onmouseenter = () => {
    setTimeout(showPopup, 5);
}

desk1.onmouseleave = () => {
    setTimeout(hidePopup, 5000);
    setTimeout(hidePopup4, 1000);
}

//De agenda popup komt na 6 seconden omhoog
desk1.onclick = () => {
    setTimeout(showPopup4, 6000);
    setTimeout(hidePopup, 6000);
}

desk2.onmouseleave = () => {
    setTimeout(hidePopup, 5000);
}

desk2.onmouseenter = () => {
    setTimeout(showPopup2, 500);
}
desk2.onmouseleave = () => {
    setTimeout(hidePopup2, 7000);
}

//De reserveer popup komt na 6 seconden omhoog
desk2.onclick = () => {
    console.log("test")
    setTimeout(showPopup3, 6000);
    setTimeout(hidePopup3, 10000);

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
const showPopup3 = () => {
    popup3.setAttribute("visible", "true");
}
const hidePopup3 = () => {
    popup3.setAttribute("visible", "false");
}
const showPopup4 = () => {
    popup4.setAttribute("visible", "true");
}
const hidePopup4 = () => {
    popup4.setAttribute("visible", "false");
}
