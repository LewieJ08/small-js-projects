const prompt = require("prompt-sync")();

function main() {

    let foods = [];
    let prices = [];
    let total = 0;

    while (true) {
        const food = prompt("Enter a food (q to quit) > ");

        if (food === "q") {
            console.log("Exiting...");
            break;
        }
    }
} 

main()