const prompt = require("prompt-sync")();

function add(x, y) {
    return (x + y);
}

function subtract(x, y) {
    return (x - y);
}

function multiply(x, y) {
    return (x * y);
}

function divide(x, y) {
    if (y === 0) {
        return undefined;
    }

    return (x / y);
}

function main() {       
    while (true) {

        console.log("\n----Calulator----");
        console.log("1. Addition");
        console.log("2. Subtraction");
        console.log("3. Multiplication");
        console.log("4. Division");
        console.log("5. Exit");

        let operator = Number(prompt("Enter an operator (1-5) > "));

        if (operator === 5) {
            console.log("Exiting...");
            break;
        }
        else if (isNaN(operator)) {
            console.log("Input must be a number, please try again");
            continue;
        }

        let num1 = Number(prompt("Enter the first number > "));
        let num2 = Number(prompt("Enter the second number> "));
        
        switch(operator) {
            case 1:
                console.log(`${num1} + ${num2} = ${add(num1, num2)}`);
                break;
            case 2:
                console.log(`${num1} - ${num2} = ${subtract(num1, num2)}`);
                break;
            case 3:
                console.log(`${num1} * ${num2} = ${multiply(num1, num2)}`);
                break;
            case 4:
                console.log(`${num1} / ${num2} = ${divide(num1, num2)}`);
                break;
            default:
                console.log("Invalid input, please try again")
                continue;
        }
    }
}

main()