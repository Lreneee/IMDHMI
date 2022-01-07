const desk1 = document.getElementById("desk1");
const popup1 = document.getElementById("popup1");

desk1.onmouseenter = () => {
    setTimeout(showPopup, 2000);

}

const showPopup = () =>{
    popup1.setAttribute("visible", "true");
}