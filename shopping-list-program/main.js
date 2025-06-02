const prompt = require("prompt-sync")();

function main() {

    let foods = [];
    let prices = [];
    let total = 0;

    while (true) {
        const food = prompt("Enter a food (q to quit) > ").toLowerCase();

        if (food === "q") {
            console.log("Getting final summary...");
            break;
        }

        const price = Number(prompt(`Enter the price of ${food} > `));

        if (isNaN(price)) {
            console.log("Invalid input, price must be an integer.");
            continue;
        }

        foods.push(food);
        prices.push(price); 
    }

    console.log("\nFoods:");
    
    for (let price of prices) {
        total += price;
    }

    for (let i = 0; i < foods.length; i++) {
        console.log(`${i+1}| ${foods[i]}: £${prices[i]}`);
    }

    console.log(`Total price: £${total}`);
} 

main()