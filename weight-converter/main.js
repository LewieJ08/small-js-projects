const prompt = require("prompt-sync")();

const convertions = {
    "mg": 0.001,       
    "g": 1,            
    "kg": 1000,         
    "oz": 28.3495,    
    "lbs": 453.592,
};

const units = Object.keys(convertions);

function convert(weight, initUnit, newUnit) {
    const weightInGrams =  weight * convertions[initUnit];
    return (weightInGrams / convertions[newUnit]);
}

function main() {
    let weight;

    while (true) {
        weight = Number(prompt("Enter current weight (Without Unit) > "));
    
        if (isNaN(weight)) {
            console.log("Weight must be an integer");
            continue;
        }
        else {
            break;
        }
    }

    while (true) {

        console.log(`\nWeight Units: \n${units}`);

        let initUnit = prompt("What is the initial weight unit > ").toLowerCase();
        let newUnit = prompt("Please select the unit to convert to > ").toLowerCase();

        if (!units.includes(initUnit) || !units.includes(newUnit)) {
            console.log(`Unit Invalid, must be one of: \n${units}`);
            continue;
        }

        let newWeight = convert(weight, initUnit, newUnit);

        console.log(`New Weight: ${newWeight} ${newUnit}`);
        break;
    }

    while (true) {
        const exitChoice = prompt("Would you like to perform another convertion? (Y/N) > ").toLowerCase();

        switch(exitChoice) {
            case "y":
                main();

            case "n":
                return;

            default:
                console.log("Invalid input, please try again.");
                continue;
        }
    }
}

main();