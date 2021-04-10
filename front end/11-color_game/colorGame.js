var numSquares = 6;
var color = [];
var pickedColor;
var square = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetBtn = document.getElementById("resetBtn");
var modeButton = document.querySelectorAll(".mode");

init();

function init() {
    setUpModeButtons();
    setUpSquares();
    reset();
}

function setUpModeButtons() {
    for(var i = 0; i < 2; i++){
        modeButton[i].addEventListener("click", function(){
            modeButton[0].classList.remove("selected");
            modeButton[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            reset();
        })
    }
}

function setUpSquares() {
    for(var i = 0; i < square.length; i++) {
        square[i].addEventListener("click", function(){
            var clickedColor = this.style.backgroundColor;
    
            if (clickedColor === pickedColor) {
                message.textContent = "Correct!!";
                sameColor(pickedColor);
                h1.style.backgroundColor = pickedColor;
                resetBtn.textContent = "Play Again?";
            } else {
                this.style.backgroundColor = "#232323";
                message.textContent = "Try Again";
            }
        })
    }
}

resetBtn.addEventListener("click", function(){
    reset();
})

function reset() {
    color = generateRandomColor(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < square.length; i++) {
        if (color[i]) {
            square[i].style.display = "block";
            square[i].style.backgroundColor = color[i];
        } else {
            square[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelBlue";
    resetBtn.textContent = "New Colors";
    message.textContent = "";
}

function sameColor(color) {
    for(var j = 0; j < square.length; j++) {
        square[j].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * numSquares);
    return color[random];
}

function generateRandomColor(num){
    var arr = [];

    for(var i = 0; i < num; i++){
        arr.push(randomColor());
    }
    
    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}