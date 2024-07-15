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
            alert(`It's a tie!, both are ${humanChoice}`);
        else if (check_win) {
            alert(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        }
        else {
            alert(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
    }


    const humanScoreText = document.createElement("div");
    const computerScoreText = document.createElement("div");
    const score = document.querySelector("#scoreBoard");

    const button = document.querySelector("#btn");
    button.addEventListener("click", (e) => {
        const humanChoice = e.target.id;
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        humanScoreText.textContent = `Your Score: ${humanScore}`;
        computerScoreText.textContent = `Computer Score: ${computerScore}`;
        if (humanScore === 5 || computerScore === 5) {
            score.removeChild(computerScoreText);
            humanScoreText.textContent = "You win!";
            if (computerScore === 5)
                humanScoreText.textContent = "You lose!";
            e.defaultPrevented();
        }
    })
    humanScoreText.textContent = `Your Score: ${humanScore}`;
    computerScoreText.textContent = `Computer Score: ${computerScore}`;



    score.appendChild(humanScoreText);
    score.appendChild(computerScoreText);
}

playGame();