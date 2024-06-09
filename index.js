let humanScore = 0;
let computerScore = 0;


function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)]
    // console.log(computerChoice);
    return computerChoice
}
// getComputerChoice()


function getHumanChoice(){
    let humanChoice = prompt("choose between rock, paper, scissors");
    if (humanChoice.toLowerCase() !== "rock" && humanChoice.toLowerCase() !== "paper" && humanChoice.toLowerCase() !== "scissors"){
        humanChoice = prompt("choose between rock, paper and scissors")
    }
    // console.log(humanChoice)
    return humanChoice
}
// getHumanChoice()


function playRound(humanChoice, computerChoice){
    if(humanChoice == computerChoice){
        console.log(`the computer chose ${computerChoice}, making it a tie, try again`)
    }
    else if (humanChoice == "scissors" && computerChoice == "paper"){
        humanScore +=1;
        console.log(`you won, the score is ${humanScore} to ${computerScore}`)
    }
    else if( humanChoice == "paper" && computerChoice == "rock"){
        humanScore += 1;
        console.log(`you won, the score is ${humanScore} to ${computerScore}`)
    }
    else if ( humanChoice == "rock" && computerChoice == "scissors"){
        humanScore += 1;
        console.log(`you won, the score is ${humanScore} to ${computerScore}`)
    }
    else{
        console.log(`the computer chose ${computerChoice} you lost`)
        computerScore += 1;
    }
}

// let humChoice = getHumanChoice()
// let compChoice = getComputerChoice()

// playRound(humChoice, compChoice)

function playGame(){
    for (i=0; i<5; i++) {
        playRound(getComputerChoice(), getHumanChoice())
    }
    console.log(`the game is over, you have ${humanScore} out of 5 games`)
}

playGame()