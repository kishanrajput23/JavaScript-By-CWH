// Guess the number game
const x = Math.floor((Math.random() * 100) + 1);

let num = prompt("Guess a number between 1 and 100");

let chances = 0;

while (x != num) {
    if (num < x) {
        num = prompt("You guessed smaller number. Try Again!!");
        chances += 1;
    }
    else {
        num = prompt("You guessed larger number. Try Again!!");
        chances += 1;
    }
}

console.log("Congratulations, You guessed the right number in", chances, "chances");

console.log("Your total score is", 100-chances);