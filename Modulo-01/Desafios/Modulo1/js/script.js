
window.addEventListener('load', () => {
    var red = document.querySelector("#rangeRed")
    red.addEventListener('change', redOnChange);

    var green = document.querySelector("#rangeGreen")
    green.addEventListener('change', greenOnChange);

    var blue = document.querySelector('#rangeBlue');
    blue.addEventListener('change', blueOnChange);
})

var redOnChange = (event) => {
    document.querySelector("#redInputValue").value = event.target.value;
}

var greenOnChange = (event) => {
    document.querySelector("#greenInputValue").value = event.target.value; 
}

var blueOnChange = (event) => {
    document.querySelector('#blueInputValue').value = event.target.value;
}

function changeColor(){
    let red = document.getElementById('rangeRed').value;
    let green = document.getElementById('rangeGreen').value;
    let blue = document.getElementById('rangeBlue').value;

    let color = 'rgb(' + red + ',' + green + ',' + blue + ')';

    document.getElementById("newColorBox").style.backgroundColor = color;
}

document.getElementById('rangeRed').addEventListener('input', changeColor);
document.getElementById('rangeGreen').addEventListener('input', changeColor);
document.getElementById('rangeBlue').addEventListener('input', changeColor);

