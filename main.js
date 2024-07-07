// function getComputerChoice
function getComputerChoice() {
    randNum = Math.floor(Math.random() * 3);
    if (randNum === 0)
        return "rock";
    else if (randNum === 1)
        return "paper";
    else
        return "scissor";
}

// create a function getHumanChoice 
function getHumanChoice() {
    userChoice = prompt("Choose rock paper or scissor");
    return userChoice.toLowerCase();
}



// define playGame function
function playGame() {
    // declare humanScore and computerScore at 0
    let humanScore = 0;
    let computerScore = 0;

    // create a playRound function that takes humanChoice and computerScore as parameter
    function playRound(humanChoice, computerChoice) {
        // create a if statement that decides who wins
        let check_win = false;
        let check_tie = false;

        if (humanChoice == computerChoice)
            check_tie = true;
        
        if ((humanChoice == "rock" && computerChoice == "scissor") 
            || (humanChoice == "paper" && computerChoice == "rock")
            || (humanChoice == "scissor" && computerChoice == "paper") )
            check_win = true;

        // print who won the game and the results
        if (check_tie)
            console.log(`It's a tie!, both are ${humanChoice}`);
        else if (check_win) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        }
        else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
    }

    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();
    playRound(humanChoice, computerChoice);
}

// call playRound function 5 times
for(i = 0; i < 5; i++)
    playGame();