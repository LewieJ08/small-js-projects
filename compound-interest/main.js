const prompt = require("prompt-sync")();

function calc(baseValue, interestRate, timeFrame) {
    const interestMultipler = interestRate + 1;
    let subTotal = Math.pow(interestMultipler, timeFrame)

    return baseValue * subTotal
}

function main() {
    while (true) {
        const baseValue = Number(prompt("Enter Base Value > "));
        const interestRate = Number(prompt("Enter Interest Rate (Decimal) > "));
        const timeFrame = Number(prompt("Enter Time Frame (Years) > "));

        if (isNaN(baseValue) || isNaN(interestRate) || isNaN(timeFrame)) {
            console.log("Error, One or more inputs are Invalid and MUST be an Integer.");
            continue;
        }
        else {
            total = calc(baseValue, interestRate, timeFrame)
            console.log(`Your total amount after ${timeFrame} year(s) will be: ${total}`);
            break;
        } 
    }
}

main()