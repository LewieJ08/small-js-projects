const prompt = require("prompt-sync")();
const units = ["C","F","K"];

function convertTemp(temp, initUnit, newUnit) {
    let celsius;

    switch (initUnit) {
        case "C":
            celsius = temp;
            break;
        case "F":
            celsius = (temp - 32) * 5 / 9;
            break;
        case "K":
            celsius = temp - 273.15;;
            break;
    }

    switch (newUnit) {
        case "C":
            return celsius;
        case "F":
            return (celsius * 9 / 5) + 32;
        case "K":
            return celsius + 273.15;
    }
}

function main() {
    let temp;  
    let initUnit;
    let newUnit;

    while (true) {
        temp = Number(prompt("Enter Temperature without unit > "));

        if (isNaN(temp)) {
            console.log("Input must be an integer, please try again");
        }
        else {
            break;
        }
    }

    console.log(`Tempearture units: \n${units}`);

    while (true) {
        initUnit = prompt("Enter the current tempearture unit > ").toUpperCase();
        newUnit = prompt("Enter the unit to convert to > ").toUpperCase();

        if (!units.includes(initUnit) || !units.includes(newUnit)) {
            console.log(`Invalid input, unit must be one of \n${units}`);
            continue;
        }

        break;
    }

    let newTemp = convertTemp(temp, initUnit, newUnit);
    console.log(`Your new temperature: ${newTemp} ${newUnit}\n`);

    while (true) {
        let exitChoice = prompt("Would you like to perform another convertion? (Y/N) > ").toLowerCase();

        switch(exitChoice) {
            case "y":
                return main();
            case "n":
                return console.log("Exiting...");
            default:
                console.log("Invalid input, please try again.");
                continue;
        }
    }
}

main()