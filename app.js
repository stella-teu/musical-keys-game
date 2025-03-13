//                               VARIABLES
let computerSequence = [];
let playerSequence = [];
let playerScore;
let options = ["up", "down", "right", "left"];
let matchCount = 0;
const loseSound = new Audio("./sound-effects/boo-sound-effect.mp3");
const upSound = new Audio("./sound-effects/C-note-up.wav");
upSound.volume = 0.1;
const leftSound = new Audio("./sound-effects/E-note-left.wav");
leftSound.volume = 0.1;
const rightSound = new Audio("./sound-effects/G-noter-right.wav");
rightSound.volume = 0.1;
const downSound = new Audio("./sound-effects/A-note-down.wav");
downSound.volume = 0.1;
const clickSound = new Audio("./sound-effects/clicking.wav");
const winSound = new Audio("./sound-effects/yay-sound.mp3");
const scoreSound = new Audio("./sound-effects/score.wav");
scoreSound.volume = 0.1;

//                               CACHED ELEMENTS
const upArrowElement = document.querySelector("#up");
const downArrowElement = document.querySelector("#down");
const rightArrowElement = document.querySelector("#right");
const leftArrowElement = document.querySelector("#left");
const scoreElement = document.querySelector("h2");
const winModalElement = document.getElementById("winning-modal");
const loseModalElement = document.getElementById("losing-modal");
const monkeyElement = document.getElementById("monkey");

//                               EVENT LISTENERS
document.querySelector("#start").addEventListener("click", startGame);
document.querySelector("#restart").addEventListener("click", startGame);
document.querySelector("#play-again").addEventListener("click", startGame);
document.querySelector("#try-again").addEventListener("click", startGame);

//                               FUNCTIONS
function startGame() {
  monkeyElement.src = "./pictures/final-still-monkey.png";
  loseSound.pause();
  clickSound.play();
  computerSequence = [];
  playerSequence = [];
  playerScore = 0;
  scoreElement.textContent = "Score: 0";
  winModalElement.style.display = "none";
  loseModalElement.style.display = "none";
  init();
}

function init() {
  //puts time interval between different "levels"
  setTimeout(() => {
    updateComputerSequence();
  }, "1500");
}

function updateComputerSequence() {
  const randomElement = getRandomElement(options);
  computerSequence.push(randomElement);
  loopThroughSequenceWithInterval();
  setTimeout(() => {
    activateEventListener();
  }, "1000");
}

function loopThroughSequenceWithInterval() {
  let i = 0;
  function next() {
    if (i < computerSequence.length) {
      if (computerSequence[i] === "up") {
        monkeyElement.src = "./pictures/monkey-up.png";
        upSound.currentTime = 0;
        upSound.play();
        upArrowElement.style.boxShadow =
          "0 0 10px rgba(1, 1, 1), 0 0 21px rgba(1, 1, 1), 0 0 42px rgba(254, 25, 93, 1), 0 0 82px rgba(254, 25, 93, 1),0 0 92px rgba(254, 25, 93, 1), 0 0 102px rgba(254, 25, 93, 1)"; // up arrow lights up
        setTimeout(() => {
          upArrowElement.style.removeProperty("box-shadow");
          monkeyElement.src = "./pictures/final-still-monkey.png";
        }, "500");
      } else if (computerSequence[i] === "down") {
        monkeyElement.src = "./pictures/monkey-down.png"
        downSound.currentTime = 0;
        downSound.play();
        downArrowElement.style.boxShadow =
          "0 0 10px rgba(1, 1, 1), 0 0 21px rgba(1, 1, 1), 0 0 42px rgba(254, 25, 93, 1), 0 0 82px rgba(254, 25, 93, 1),0 0 92px rgba(254, 25, 93, 1), 0 0 102px rgba(254, 25, 93, 1)"; // down arrow lights up
        setTimeout(() => {
          downArrowElement.style.removeProperty("box-shadow");
          monkeyElement.src = "./pictures/final-still-monkey.png";
        }, "500");
      } else if (computerSequence[i] === "right") {
        rightSound.currentTime = 0;
        rightSound.play();
        rightArrowElement.style.boxShadow =
          "0 0 10px rgba(1, 1, 1), 0 0 21px rgba(1, 1, 1), 0 0 42px rgba(52, 11, 255, 1), 0 0 82px rgba(52, 11, 255, 1),0 0 92px rgba(52, 11, 255, 1), 0 0 102px rgba(52, 11, 255, 1)"; //right arrow lights up
        setTimeout(() => {
          rightArrowElement.style.removeProperty("box-shadow");
          monkeyElement.src = "./pictures/final-still-monkey.png";
        }, "500");
      } else if (computerSequence[i] === "left") {
        leftSound.currentTime = 0;
        leftSound.play();
        leftArrowElement.style.boxShadow =
          "0 0 10px rgba(1, 1, 1), 0 0 21px rgba(1, 1, 1), 0 0 42px rgba(52, 11, 255, 1), 0 0 82px rgba(52, 11, 255, 1),0 0 92px rgba(52, 11, 255, 1), 0 0 102px rgba(52, 11, 255, 1)"; // left arrow lights up
        setTimeout(() => {
          leftArrowElement.style.removeProperty("box-shadow");
          monkeyElement.src = "./pictures/final-still-monkey.png";
        }, "500");
      }
      i++;
      setTimeout(next, "600");
    }
  }
  next();
}

function getRandomElement(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

function activateEventListener() {
  window.addEventListener("keyup", updatePlayerSequence);
}

function updatePlayerSequence(event) {
  if (event.code === "ArrowUp") {
    monkeyElement.src = "./pictures/monkey-up.png";
    upSound.currentTime = 0;
    upSound.play();
    playerSequence.push(options[0]);
    upArrowElement.style.boxShadow =
      "0 0 10px rgba(1, 1, 1), 0 0 21px rgba(1, 1, 1), 0 0 42px rgba(254, 25, 93, 1), 0 0 82px rgba(254, 25, 93, 1),0 0 92px rgba(254, 25, 93, 1), 0 0 102px rgba(254, 25, 93, 1)"; // up arrow lights up
    setTimeout(() => {
      upArrowElement.style.removeProperty("box-shadow");
      monkeyElement.src = "./pictures/final-still-monkey.png";
    }, "500");
    checkLastIndex();
  } else if (event.code === "ArrowDown") {
    monkeyElement.src = "./pictures/monkey-down.png"
    downSound.currentTime = 0;
    downSound.play();
    playerSequence.push(options[1]);
    downArrowElement.style.boxShadow =
      "0 0 10px rgba(1, 1, 1), 0 0 21px rgba(1, 1, 1), 0 0 42px rgba(254, 25, 93, 1), 0 0 82px rgba(254, 25, 93, 1),0 0 92px rgba(254, 25, 93, 1), 0 0 102px rgba(254, 25, 93, 1)"; // down arrow lights up
    setTimeout(() => {
      downArrowElement.style.removeProperty("box-shadow");
      monkeyElement.src = "./pictures/final-still-monkey.png";
    }, "500");
    checkLastIndex();
  } else if (event.code === "ArrowRight") {
    rightSound.currentTime = 0;
    rightSound.play();
    playerSequence.push(options[2]);
    rightArrowElement.style.boxShadow =
      "0 0 10px rgba(1, 1, 1), 0 0 21px rgba(1, 1, 1), 0 0 42px rgba(52, 11, 255, 1), 0 0 82px rgba(52, 11, 255, 1),0 0 92px rgba(52, 11, 255, 1), 0 0 102px rgba(52, 11, 255, 1)"; //right arrow lights up
    setTimeout(() => {
      rightArrowElement.style.removeProperty("box-shadow");
      monkeyElement.src = "./pictures/final-still-monkey.png";
    }, "500");
    checkLastIndex();
  } else if (event.code === "ArrowLeft") {
    leftSound.currentTime = 0;
    leftSound.play();
    playerSequence.push(options[3]);
    leftArrowElement.style.boxShadow =
      "0 0 10px rgba(1, 1, 1), 0 0 21px rgba(1, 1, 1), 0 0 42px rgba(52, 11, 255, 1), 0 0 82px rgba(52, 11, 255, 1),0 0 92px rgba(52, 11, 255, 1), 0 0 102px rgba(52, 11, 255, 1)"; //right arrow lights up
    setTimeout(() => {
      leftArrowElement.style.removeProperty("box-shadow");
      monkeyElement.src = "./pictures/final-still-monkey.png";
    }, "500");
    checkLastIndex();
  }
}

function checkLastIndex (){
  if (playerSequence[playerSequence.length - 1] !== computerSequence[playerSequence.length - 1]){
    loseSound.currentTime = 0;
    loseSound.play();
    loseModalElement.style.display = "block";
  } else if (playerSequence.length === computerSequence.length) {
    updateScore();
    window.removeEventListener("keyup", updatePlayerSequence);
    console.log("it works");
  }
}

function updateScore() {
    scoreSound.play();
    playerScore += 1;
    scoreElement.textContent = "Score: " + playerScore;
    checkWin();
    matchCount = 0;

}

function checkWin() {
  if (playerScore === 10) {
    winSound.currentTime = 0;
    winSound.play();
    winModalElement.style.display = "block";
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
