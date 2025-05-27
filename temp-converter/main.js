const prompt = require("prompt-sync")();
const units = ["C","F","K"];

function convertTemp() {
    //pass
}

function main() {
    let temp;  

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
        console.log(`Tempearture units: \n${units}`);
        let initUnit = prompt("Enter the current tempearture unit > ");
        let newUnit = prompt("Enter the unit to convert to > ");

        if (!units.includes(initUnit) || !units.includes(newUnit)) {
            console.log(`Inalid input, unit must be one of \n${units}`);
            continue;
        }

        let newTemp = convertTemp(temp, initUnit, newUnit)
    }
}

main()