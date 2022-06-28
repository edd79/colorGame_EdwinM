var diffEls = document.querySelectorAll(".diff__btn");
var diffEl = document.querySelector(".diff__btn.active").innerHTML;
var n = diffEl;
var colorsEl = document.querySelector(".colors");
var colorsBlocks;
var rgbEl = document.querySelector(".rgb");
var statusEl = document.querySelector(".status");
var colors = [];
var reset = document.querySelector(".reset")
createBlocks(n);
resetGame();
reset.addEventListener("click", () => {
    resetGame()
})

function checkColors(e) {
    // your code here
    if (colors[pickedColor] === e.target.style.backgroundColor) {
        statusEl.innerHTML = "Good job!<br>Click the RESET button to begin a New Game";
        document.body.style.color = colors[pickedColor];
        for (var i = 0; i < colorsBlocks.length; i++) {
            colorsBlocks[i].style.backgroundColor = colors[pickColors];
        }

    } else {
        e.target.style.backgroundColor = "transparent";
        statusEl.innerHTML = "Try again!";
    }
}
// resetGame;
function resetGame() {
    createBlocks(n);
    document.body.style.color = "black";
    colors = [];
    pickColors();
    pickedColor = random(n);
    rgbEl.innerHTML = colors[pickedColor];
    setColors();
    statusEl.innerHTML =
        "Try to guess the right color based on the RGB value by clicking on the blocks.";
}

function setColors() {
    for (var i = 0; i < colorsBlocks.length; i++) {
        colorsBlocks[i].style.backgroundColor = colors[i];
    }
}

function pickColors() {
    for (var i = 0; i < n; i++) {
        colors.push(randomColor());
    }
}

function randomColor() {
    return "rgb(" + random(255) + ", " + random(255) + ", " + random(255) + ")";
}

function random(r) {
    return Math.floor(Math.random() * r);
}


function setNumberOfTiles(e) {
    // your code here
    for (var i = 0; i < diffEls.length; i++) {
        diffEls[i].addEventListener("click", setNumberOfTiles)
    }
    for (var i = 0; i < diffEls.length; i++) {
        diffEls[i].classList.remove("active");
    }
    e.target.classList.add("active");
    diffEl = document.querySelector(".diff__btn.active").innerHTML;
    n = diffEl;
    resetGame();

}

function createBlocks(num) {
    colorsEl.innerHTML = "";

    // here is an example of a loop that is used to create the blocks of color depending on you choice ie 6 or 9, however you need to add event listeners
    for (var i = 0; i < num; i++) {
        var block = document.createElement("div");
        block.classList.add("colors__block");
        colorsEl.appendChild(block);
    }
    colorsBlocks = document.querySelectorAll(".colors__block");
    for (var i = 0; i < colorsBlocks.length; i++) {
        colorsBlocks[i].addEventListener("click", checkColors);
    }
    for (var i = 0; i < diffEls.length; i++) {
        diffEls[i].addEventListener("click", setNumberOfTiles)
    }
}