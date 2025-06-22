const button = document.getElementById("button");
const valueH1 = document.getElementById("value");
const cursorButton = document.getElementById("cursor");
const cpsH3 = document.getElementById("cps");

let cps = 0;
let value = 0;

function updateHTML() {
    valueH1.innerHTML = value;
    cpsH3.innerHTML = cps; 
}

// CPS Func + CPS Interval 

function CpsFunc() {
    value += cps
    updateHTML()
}

setInterval(CpsFunc, 1000)

button.addEventListener("click", function () {
    value++;
    updateHTML()
});

// SHOP BUTTONS

// Cursor Func
cursorButton.addEventListener("click", function () {
    if (value >= 5) {
        value -= 5;
        cps += 1;
        updateHTML();
    }
    else {
        window.alert("Not Enough Funds");
    }
});