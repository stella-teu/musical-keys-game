//                               VARIABLES
let computerSequence = [];
let playerSequence = [];
let playerScore;
let options = ["up", "down", "right", "left"];
let matchCount = 0;

//                               CACHED ELEMENTS
const gameMessagElement = document.querySelector("#message");
const upArrowElement = document.querySelector("#up");
const downArrowElement = document.querySelector("#down");
const rightArrowElement = document.querySelector("#right");
const leftArrowElement = document.querySelector("#left");
const scoreElement = document.querySelector("h2");

//                               EVENT LISTENERS
document.querySelector("#start").addEventListener("click", startGame);
window.addEventListener("keyup", updatePlayerSequence);
document.querySelector("#restart").addEventListener("click", startGame);

//                               FUNCTIONS
function startGame() {
  init();
  computerSequence = [];
  playerSequence = [];
  playerScore = 0;
  gameMessagElement.textContent = "";
  scoreElement.textContent = "Score: 0"
  sequenceLength = 0;
}

function init() { //puts time interval between different "levels"
  setTimeout(() => {
    updateComputerSequence();
  }, "1000");
}

function updateComputerSequence() {
  const randomElement = getRandomElement(options);
  computerSequence.push(randomElement);
  loopThroughSequenceWithInterval();
  console.log(computerSequence.length)
}

function loopThroughSequenceWithInterval(){
  let i = 0;
  function next(){
    if (i < computerSequence.length){
      if (computerSequence[i] === "up") {
        upArrowElement.style.boxShadow =
          "0 4px 8px 0 rgba(254, 25, 93, 0.2), 0 6px 20px 0 rgba(254, 25, 93, 0.2)"; // up arrow lights up
        setTimeout(() => {
          upArrowElement.style.removeProperty("box-shadow");
        }, "500");
      } else if (computerSequence[i] === "down") {
        downArrowElement.style.boxShadow =
          "0 4px 8px 0 rgba(254, 25, 93, 0.2), 0 6px 20px 0 rgba(254, 25, 93, 0.2)"; // down arrow lights up
        setTimeout(() => {
          downArrowElement.style.removeProperty("box-shadow");
        }, "500");
      } else if (computerSequence[i] === "right") {
        rightArrowElement.style.boxShadow =
          "0 4px 8px 0 rgba(52, 11, 255, 0.2), 0 6px 20px 0 rgba(52, 11, 255, 0.2)"; //right arrow lights up
        setTimeout(() => {
          rightArrowElement.style.removeProperty("box-shadow");
        }, "500");
      } else if(computerSequence[i] === "left"){
        leftArrowElement.style.boxShadow =
          "0 4px 8px 0 rgba(52, 11, 255, 0.2), 0 6px 20px 0 rgba(52, 11, 255, 0.2)"; // left arrow lights up
        setTimeout(() => {
          leftArrowElement.style.removeProperty("box-shadow");
        }, "500");
      }
      i++;
      setTimeout(next, "600")
    }
  }
  next();
}

function getRandomElement(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

function updatePlayerSequence(event) {
  if (event.code === "ArrowUp") {
    playerSequence.push(options[0]);
    upArrowElement.style.boxShadow =
      "0 4px 8px 0 rgba(254, 25, 93, 0.2), 0 6px 20px 0 rgba(254, 25, 93, 0.2)"; // up arrow lights up
    setTimeout(() => {
      upArrowElement.style.removeProperty("box-shadow");
    }, "500");
  } else if (event.code === "ArrowDown") {
    playerSequence.push(options[1]);
    downArrowElement.style.boxShadow =
      "0 4px 8px 0 rgba(254, 25, 93, 0.2), 0 6px 20px 0 rgba(254, 25, 93, 0.2)"; // down arrow lights up
    setTimeout(() => {
      downArrowElement.style.removeProperty("box-shadow");
    }, "500");
  } else if (event.code === "ArrowRight") {
    playerSequence.push(options[2]);
    rightArrowElement.style.boxShadow =
      "0 4px 8px 0 rgba(52, 11, 255, 0.2), 0 6px 20px 0 rgba(52, 11, 255, 0.2)"; //right arrow lights up
    setTimeout(() => {
      rightArrowElement.style.removeProperty("box-shadow");
    }, "500");
  } else if (event.code === "ArrowLeft") {
    playerSequence.push(options[3]);
    leftArrowElement.style.boxShadow =
      "0 4px 8px 0 rgba(52, 11, 255, 0.2), 0 6px 20px 0 rgba(52, 11, 255, 0.2)"; //right arrow lights up
    setTimeout(() => {
      leftArrowElement.style.removeProperty("box-shadow");
    }, "500");
  }
  console.log(playerSequence.length);
  if (playerSequence.length === computerSequence.length){
    console.log("it works");
    updateScore();
  }
}

function updateScore() {
  for (let i = 0; i < computerSequence.length; i++){
  if(playerSequence[i] === computerSequence[i]){
    matchCount += 1;
  } else {
    gameMessagElement.textContent = "You lost! Start again?";
  }
}
  if(matchCount === computerSequence.length){
    playerScore += 1;
    scoreElement.textContent = "Score: " + playerScore;
    checkWin();
    matchCount = 0;
  }
}

function checkWin() {
  if (playerScore === 10){
    gameMessagElement.textContent = "Congrats! You Won!"
  } else {
    playerSequence = [];
    init();
  }
}

//                               PSEUDOCODE
// 1. Define variables for:
// the computer's sequence (array)
// the player's sequence (array)
// the player's score
// options (array) with button directions
// key count = 0

// 2. Save cache element for  game message.

// 3. Add event listeners to:
// start button
// up element
// down element
// right element
// left element
// restart element

// 4. Create startGame() function, which calls init(). Call this when clicking the start button through an event listener.

// 5. Create an init() function which will keep track of all the variables.
// at game start: set computer and player sequence, score and game message empty.
// call updateComputerSequence()
// call a render() function to update all variables

// 6. Create a render() function:
// set key count to 0
// calls updateScore()
// calls checkWin()

// 7. Create a updateComputerSequence() function:
// randomly chooses a button to start sequence from choices array
// activates chosen button with visual and auditory signifier
// saves choice to computer sequence array

// 8. Create an updatePlayerSequence() function:
// use event listeners from buttons to save player's choice in the player's sequence array AND add 1 to click count
// also activate visual and auditory signifier through event listener
// IF key count matches the computer sequence's arrat length, call render()

// 9. Create an updateScore() function which adds 1 to player's score IF player sequence array matches computer sequence array.

// 10. Create checkWin() function:
//  IF score = 10, set game message to congratulatory message.
// ELSE IF the game sequence and player sequence don't match, set game message to losing message.
// ELSE call updateComputerSequence().

// 11. Call startGame() when reset button is clicked through event listener.
