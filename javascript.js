


// create function getComputerChoice
function getComputerChoice(){
    
    // write code so that getComputerChoice returns the strings rock, paper or scissors
    // use math.random() to do this

    // Assign value of Math.random() to x variable
    let x = Math.random();
    
    // only allow one decimal place
    x = x.toFixed(4);

    // create if statements for when math.random() is less than or equal to 0.3, between 0.3 and 0.6, and between 0.6 and 1
    if (x <= 0.3333){
        x = "rock";
        return x;
    } else if (0.3333 < x && x <= 0.6666){
        x = "paper";
        return x;
    } else if (0.6666 < x && x <= 0.9999){
        x = "scissors";
        return x;
    }
}



// create function getHumanChoice
function getHumanChoice(){
    // create x variable and prompt user for choice (rock, paper or scissors)
    let x = prompt("Please enter your choice (rock, paper or scissors)");

    // use toLowerCase() so that prompt is case-insensitive
    x = x.toLowerCase();
    
    // return x variable
    return x;
}







// create function playGame
function playGame(){

    // Declare score variables humanScore and computerScore
    let humanScore = 0;
    let computerScore = 0;


    // Declare playRound function
    function playRound(humanChoice, computerChoice){
        // select the #winner div
        let winner = document.querySelector('#winner');
        // create if statement to check once one player reaches 5 points
        if(humanScore == 5 || computerScore == 5){
            // if human wins, print human won
            if(humanScore == 5){
                winner.textContent = 'You win the game!! Congratulations!';
            }
            // else if computerwins, print computer won
            else{
                winner.textContent= 'You lost! Computer wins the game!';
            }
        }

        // select div with id result and assign to variable result
        let result = document.querySelector('#result');

        // select divs with id player, computer and select children with id playerScore, computerScore
        let pScore = document.querySelector('#player').querySelector('#playerScore');
        let cScore = document.querySelector('#computer').querySelector('#computerScore');

        // display initial scores
        pScore.textContent = humanScore;
        cScore.textContent = computerScore;

        // create if statements for when rock beats scissors, scissors beats paper, paper beats rock, or tie

        // if rock vs scissors
        if ((humanChoice == 'rock' && computerChoice == 'scissors') || (humanChoice == 'scissors' && computerChoice == 'rock')){
            // if the human chose rock, human wins
            if (humanChoice == 'rock'){
                humanScore += 1;
                result.textContent = 'you win! rock beats scissors!';
                // set textContent of pScore to humanScore
                pScore.textContent = humanScore;

                return humanScore;
            }

            // if the computer chose rock, computer wins
            else if (computerChoice == 'rock'){
                // increment computerScore by one
                computerScore += 1;

                // set result variable text to 'you lost! rock beats scissors!'
                result.textContent = 'you lost! rock beats scissors!';
                // print 'you lost! rock beats scissors!'
                // set textContent of cScore to computerScore
                cScore.textContent = computerScore;

                // return computerScore
                return computerScore;
            } 
        }
        // if its scissors vs paper
        else if ((humanChoice == 'scissors' && computerChoice == 'paper') || (humanChoice == 'paper' && computerChoice == 'scissors')){
            // if humanChoice is scissors, human wins
            if (humanChoice == 'scissors'){
                // increment humanScore by one
                humanScore += 1;

                // print that you won
                result.textContent = 'You won! Scissors beats paper!';
                // set textContent of pScore to humanScore
                pScore.textContent = humanScore;

                // return humanScore
                return humanScore;
            }

            // if the computerChoice is scissors, computer wins
            else if (computerChoice == 'scissors'){
                // increment computerScore by one
                computerScore += 1;

                // print 'you lost! rock beats scissors!'
                result.textContent = 'you lost! Scissors beats paper!';
                // set textContent of cScore to computerScore
                cScore.textContent = computerScore;

                // return computerScore
                return computerScore;
            } 
        }
        // if its paper vs rock
        else if ((humanChoice == 'paper' && computerChoice == 'rock') || (humanChoice == 'rock' && computerChoice == 'paper')){
            // if humanChoice is paper, human wins
            if (humanChoice == 'paper'){
                // increment humanScore by one
                humanScore += 1;

                // print victory, paper beats rock
                result.textContent = 'You won! Paper beats rock!';
                // set textContent of pScore to humanScore
                pScore.textContent = humanScore;

                // return humanScore
                return humanScore;
            }

            // if computerChoice is paper, computer wins
            else if (computerChoice == 'paper'){
                // increment computerScore by one
                computerScore += 1;

                // print you lost, paper beats rock
                result.textContent = 'You lost! Paper beats rock!';

                // set textContent of cScore to computerScore
                cScore.textContent = computerScore;

                // return computerScore
                return computerScore;
            }
        }
        // if it's a tie
        else{
            result.textContent = "It's a tie!";
            return;
        }
    }

    // Create three buttons, one for each selection. Add an event listener to the buttons that call your playRound function 
    // with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)

    let div = document.querySelector('#container');
    div.addEventListener('click', (event) =>{
    let target = event.target;
    let humanSelection;
    let computerSelection = getComputerChoice();
    switch(target.id){
        case 'rock':
            humanSelection = 'rock';
            playRound(humanSelection, computerSelection)
            break;
        case 'paper':
            humanSelection = 'paper';
            playRound(humanSelection, computerSelection)
            break;
        case 'scissors':
            humanSelection = 'scissors';
            playRound(humanSelection, computerSelection)
            break;
    }
    })
    
    

    
}
// move playRound function and score variables so theyre declared inside playGame function

playGame();