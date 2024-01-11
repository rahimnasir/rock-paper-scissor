let playerScore = 0
let computerScore = 0

function getComputerChoice(){
    let moves = Array("rock","paper","scissor");
    let turn = moves[Math.floor(Math.random()*moves.length)];
    return turn;
}


function playRound(playerSelection,computerSelection){
    let player = playerSelection.toLowerCase()
    let computer = computerSelection
    let result

    if (player == "rock") {
        if (computer == "paper"){
            result = "You Lose! Paper beats Rock"
            computerScore +=1
        }else if(computer == "scissor"){
            result = "You Win! Rock beats Scissor"
            playerScore +=1
        }
    }else if (player == "paper") {
        if (computer == "rock"){
            result = "You Win! Paper beats Rock"
            playerScore +=1
        }else if(computer == "scissor"){
            result = "You Lose! Scissor beats Paper"
            computerScore +=1
        }
    }else if (player == "scissor") {
        if (computer == "paper"){
            result = "You Win! Scissor beats Paper"
            playerScore +=1
        }else if(computer == "rock"){
            result = "You Lose! Rock beats Scissor"
            computerScore +=1
        }
    }

    if (player == computer){
        result = "It's a tie!"
    }

    return result
}

/*
const playerSelection = "sCisSor";
const computerSelection = getComputerChoice();
console.log("Player: "+playerSelection.toLowerCase() + ", Computer: "+computerSelection)
console.log(playRound(playerSelection, computerSelection));
*/

function game(){
    let playerSelection = prompt()
    let computerSelection = getComputerChoice()
    let choices = "Player: "+playerSelection.toLowerCase() + ", Computer: "+computerSelection
    let result = (playRound(playerSelection, computerSelection));

    alert(choices + "\n" + result)
}

function scoreResult(){
    let finalResult
    if (playerScore > computerScore){
        finalResult = "Player win by "+playerScore+"-"+computerScore
    }else if (playerScore < computerScore){
        finalResult = "Computer win by "+computerScore+"-"+playerScore
    }else if (playerScore == computerScore){
        finalResult = "Tie by "+computerScore+"-"+playerScore
    }
    return finalResult
}

for(i = 1;i <= 5;i++){
    game()
}

alert(scoreResult())




