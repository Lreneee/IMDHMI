const desk1 = document.getElementById("desk1");
const desk2 = document.getElementById("desk2");

const popup1 = document.getElementById("popup1");
const popup2 = document.getElementById("popup2");
const popup3 = document.getElementById("popup3");
const popup4 = document.getElementById("popup4");
const popup5 = document.getElementById("popup5");

const agenda_tim = document.getElementById("agenda_tim");
const agenda_werkplek = document.getElementById("agenda_werkplek");

//Bureau links
desk1.onmouseenter = () => {
    setTimeout(showPopup, 5);
}
desk1.onmouseleave = () => {
    setTimeout(hidePopup, 5000);
}

//Agenda Tim inzien
agenda_tim.onmouseenter = () => {
    console.log("touched 1")
    setTimeout(showPopup5, 1000);
    setTimeout(hidePopup, 999);
}
agenda_tim.onmouseleave = () => {
    setTimeout(hidePopup5, 5000);
}

//Agenda werkplek inzien
agenda_werkplek.onmouseenter = () => {
    console.log("touched 2")
    setTimeout(showPopup4, 1000);
    setTimeout(hidePopup, 999);
}
agenda_werkplek.onmouseleave = () => {
    setTimeout(hidePopup4, 5000);
}

//Bureau rechts
desk2.onmouseleave = () => {
    setTimeout(hidePopup, 5000);
}

desk2.onmouseenter = () => {
    setTimeout(showPopup2, 500);
}
desk2.onmouseleave = () => {
    setTimeout(hidePopup2, 7000);
}
desk2.onclick = () => {
    console.log("test")
    setTimeout(showPopup3, 6000);
    setTimeout(hidePopup3, 10000);

}
popup2.onclick = () => {
    console.log("test")
    setTimeout(showPopup3, 6000);
    setTimeout(hidePopup3, 10000);
}

const showPopup = () => {
    popup1.setAttribute("visible", "true");
    agenda_tim.setAttribute("visible", "true");
    agenda_werkplek.setAttribute("visible", "true");
}
const hidePopup = () => {
    popup1.setAttribute("visible", "false");
    agenda_tim.setAttribute("visible", "false");
    agenda_werkplek.setAttribute("visible", "false");
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
const showPopup5 = () => {
    popup5.setAttribute("visible", "true");
}
const hidePopup5 = () => {
    popup5.setAttribute("visible", "false");
}
