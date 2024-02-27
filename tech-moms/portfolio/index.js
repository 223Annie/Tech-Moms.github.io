const red = 105;
const green = 197;
const blue = 197;

const header = document.getElementById("header");
console.log(header.innerText);

function changeColor() {
    const scrollFactor = 1 + window.scrollY / 400


    const r = red / scrollFactor;
    const g = green / scrollFactor;
    const b = blue / scrollFactor;

    const updatedColor = `rgb(${r}, ${g}, ${b})`;
    header.style.backgroundColor = updatedColor;


    // console.log(updatedColor)

}
changeColor()
window.addEventListener('scroll', changeColor)