const randomNum = Math.floor(Math.random() * 101);

function main() {
    let guesses = 0;

    while (true) {
        const guess = Number(window.prompt('Enter a Number From 0 to 100'));

        if (isNaN(guess)) {
            window.alert("Guess Must be a Number");
            continue;
        }
        else if (-1 >= guess || guess > 100) {
            window.alert("Guess must be from 0 to 100!");
            continue;
        }
        else if (guess > randomNum) {
            guesses++;
            window.alert("LOWER");
            continue;
        }
        else if (guess < randomNum) {
            guesses++;
            window.alert("HIGHER");
            continue;
        }
        else {
            window.alert(`CORRECT, It took you ${guesses} guesses.`);
            window.alert("Reload the page to play again.");
            break;
        }
    }
}

main()