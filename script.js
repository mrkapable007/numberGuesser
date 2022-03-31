let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget =()=>{
  return Math.floor(Math.random() * 10);
}

const compareGuesses = (humanGuess, computerGuess, secretNumber) =>{
  secretNumber = generateTarget();
  let human = Math.abs(humanGuess - secretNumber);
  let computer = Math.abs(computerGuess - secretNumber);
  if(human > computer){
    return true;
  } else if(computer < human){
    return false;
  }else if (human === computer){
    return 'No winner'
  }
}

const updateScore = winner =>{
  if (humanScore === 'human'){
    humanScore += 1;
  }else if (computerScore === 'computer'){
   computerScore += 1;
  }
}

const advanceRound = () =>{
  currentRoundNumber++;
}

console.log(updateScore());
console.log(compareGuesses());
console.log(generateTarget());

