const button = document.getElementById("button");
const valueH1 = document.getElementById("value");
const cursorButton = document.getElementById("cursor");
const cpsH3 = document.getElementById("cps");

// Building Costs
const cursorCost = document.getElementById("cursorCost")

// Building Amounts & New Costs

let cursorNum = 0;
let cursorNewCost;

let cps = 0;
let value = 0;

function updateHTML() {
    valueH1.innerHTML = Math.round(value * 10) / 10;
    cpsH3.innerHTML = Math.round(cps * 10) / 10; 

    if (isNaN(cursorNewCost)) {
        cursorNewCost = 15;
    }
    
    cursorCost.innerHTML = Math.round(cursorNewCost * 10) / 10;
}

function priceIncrease(baseCost, buildingNum) {
    const price = baseCost * Math.pow(1.15, buildingNum);
    return price;
}

// CPS Func + CPS Interval 

function CpsFunc() {
    value += cps;
    updateHTML();
}

setInterval(CpsFunc, 1000)

button.addEventListener("click", function () {
    value++;
    updateHTML();
});

// SHOP BUTTONS

// Cursor Func
cursorButton.addEventListener("click", function () {
    if (value >= 15) {
        value -= 15;
        cps += 0.1;
        cursorNum += 1;
        cursorNewCost = priceIncrease(15, cursorNum);
        updateHTML();
    }
    else {
        window.alert("Not Enough Funds");
    }
});