let rounds = 1;
let computerScore = 0;
let userScore = 0;

alert("Welcome to Snake, Water & Gun Game.");
alert("You have total 10 rounds to play. So, let's get started.");

while (rounds <= 10) {
    // Define an array of characters
    const characters = ['s', 'w', 'g'];
    
    // Generate a random index between 0 and 2
    let randomIndex = Math.floor(Math.random() * characters.length);

    // Get the randomly chosen character
    let computerChoice = characters[randomIndex];

    alert("Round : " + rounds);

    let userChoice = prompt("Choose s for Snake, w for Water and g for Gun");
    
    if (computerChoice == "g" && userChoice == "w") {
        alert("Your choice : " + userChoice + " || Computer Choice : " + computerChoice);
        alert("You won this round.");
        userScore++;
    }
    else if (computerChoice == "g" && userChoice == "s") {
        alert("Your choice : " + userChoice + " || Computer Choice : " + computerChoice);
        alert("You lost this round.");
        computerScore++;
    }
    else if (computerChoice == "g" && userChoice == "g") {
        alert("Your choice : " + userChoice + " || Computer Choice : " + computerChoice);
        alert("Oops it's draw.");
    }
    else if (computerChoice == "w" && userChoice == "s") {
        alert("Your choice : " + userChoice + " || Computer Choice : " + computerChoice);
        alert("You won this round.");
        userScore++;
    }
    else if (computerChoice == "w" && userChoice == "g") {
        alert("Your choice : " + userChoice + " || Computer Choice : " + computerChoice);
        alert("You lost this round.");
        computerScore++;
    }
    else if (computerChoice == "w" && userChoice == "w") {
        alert("Your choice : " + userChoice + " || Computer Choice : " + computerChoice);
        alert("Oops it's draw.");
    }
    else if (computerChoice == "s" && userChoice == "g") {
        alert("Your choice : " + userChoice + " || Computer Choice : " + computerChoice);
        alert("You won this round.");
        userScore++;
    }
    else if (computerChoice == "s" && userChoice == "w") {
        alert("Your choice : " + userChoice + " || Computer Choice : " + computerChoice);
        alert("You lost this round.");
        computerScore++;
    }
    else if (computerChoice == "w" && userChoice == "s") {
        alert("Your choice : " + userChoice + " || Computer Choice : " + computerChoice);
        alert("Oops it's draw.");
    }
    else {
        continue;
    }
    rounds++;
}

document.write("\nYour Score : " + userScore + " || Computer Score : " + computerScore);

if (computerScore>userScore) {
    document.write("\nSorry you have lost this battle. Better luck next time.");
}
else {
    document.write("\nCongratulations, you have won this battle. Thanks for playing.")
}