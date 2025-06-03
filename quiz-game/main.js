const prompt = require("prompt-sync")();

const questions = ["What is the capital city of France?",
                   "Which planet is known as the Red Planet?",
                   "What do bees make?",
                   "How many legs does a spider have?",
                   "Which ocean is the largest?"];

const options = [["A) Madrid","B) Paris","C) Rome"],
                 ["A) Earth","B) Venus","C) Mars"],
                 ["A) Honey","B) Milk","C) Butter"],
                 ["A) 6","B) 8","C) 10"],
                 ["A) Atlantic Ocean","B) Indian Ocean","C) Pacific Ocean"]];

const answers = ["B","C","A","B","C"];

function main() {
    let score = 0

    let i = 0
    for (let question of questions) {
        console.log(question);
        console.log(options[i]);

        while (true) {
            userAnswer = prompt("> ").toUpperCase();

            if (userAnswer === answers[i]) {
                console.log("Correct!");
                score += 1;
                break;
            }
            else if (!(answers.includes(userAnswer))) {
                console.log("Invalid input, must be A, B or C.");
                continue;
            }
            else {
                console.log("Incorrect.");
                break;
            }
        }

        i += 1
    }
    
    console.log(`Final score: ${score}`)
}

main()