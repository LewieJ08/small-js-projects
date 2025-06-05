const prompt = require("prompt-sync")();

const menu = {
    "Hamburger": 2.00,
    "Cheeseburger": 3.00,
    "Chicken Wrap": 3.50,
    "Chips": 1.50,
    "Soft Drink": 2.20,
    "Hot Drink": 2.50,
};

function main() {

    let foods = [];

    for (const [menuFood, price] of Object.entries(menu)) {
        console.log(`${menuFood} £${price}`);
    }

    while (true) {
        const food = prompt("Enter a food (q to quit) > ").toLowerCase();

        if (!Object.keys(menu).includes(food)) {
            console.log("Invalid input. Food not on menu.");
            continue;
        }
    }
}

main()