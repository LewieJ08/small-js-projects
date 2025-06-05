const prompt = require("prompt-sync")();

const menu = {
    "1": ["Hamburger", 2.00],
    "2": ["Cheeseburger", 2.50],
    "3": ["Chicken Wrap", 3.30],
    "4": ["Chips", 1.50],
    "5": ["Pasta", 1.80],
    "6": ["Soft Drink", 2.30],
    "7": ["Hot Drink", 3.00],
};

function printReceipt(foods, prices) {
    let totalPrice = 0

    for (let price of prices) {
        totalPrice += price
    }

    console.log("\nRECEIPT:")

    for (let i = 1; i <= foods.length; i++) {
        console.log(`${i}. ${foods[i-1]} £${prices[i-1]}`)
    }

    console.log(`Total: £${totalPrice}`)
}

function main() {

    let foods = [];
    let prices = [];

    for (const [id,[menuFood, price]] of Object.entries(menu)) {
        console.log(`${id}. ${menuFood} £${price}`);
    }

    while (true) {
        const id = prompt("Enter a food ID (q to quit) > ").toLowerCase();

        if (id === "q") {
            return printReceipt(foods,prices);
        }

        else if (!Object.keys(menu).includes(id)) {
            console.log("Invalid input. Food not on menu.");
            continue;
        }

        foods.push(menu[id][0]);
        prices.push(menu[id][1]);

        console.log(`${menu[id][0]} added.`);
    }
}

main()