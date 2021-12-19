const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
    let rgbaColor = "rgba(";
    for (let i = 0; i < 3; i++) {
        rgbaColor += getRandomNumber() + ", ";
    }
    rgbaColor += Math.random().toFixed(1) + ")";
    color.textContent = rgbaColor;
    document.body.style.backgroundColor = rgbaColor;
});

function getRandomNumber() {
    return Math.floor(Math.random() * 256);
}