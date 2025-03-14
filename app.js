//                               VARIABLES
let computerSequence = [];
let playerSequence = [];
let playerScore;
let options = ["up", "down", "right", "left"];
let clickedInfinite = false;
let highScore = 0;
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
const highScoreElement = document.querySelector("#high-score");
const hardArrowsElement = document.querySelectorAll(".hard-arrows");
const leftUpArrowElement = document.querySelector("#left-up");
const rightUpArrowElement = document.querySelector("#right-up");
const leftDownArrowElement = document.querySelector("#left-down");
const rightDownArrowElement = document.querySelector("#right-down");

//                               EVENT LISTENERS
document.querySelector("#start").addEventListener("click", () => {
  clickedInfinite = false;
  highScoreElement.style.display = "none";
  hardArrowsElement.forEach( (arrow) => {
    arrow.style.display = "none";
  });
  if (options.length > 4){
    while (options.length > 4){
      options.pop();
  }
}
  startGame();
});
document.querySelector("#restart").addEventListener("click", startGame);
document.querySelector("#play-again").addEventListener("click", startGame);
document.querySelector("#try-again").addEventListener("click", startGame);
document.querySelector("#infinite").addEventListener("click", () => {
  clickedInfinite = true;
  highScoreElement.style.display = "block";
  startGame();
});
document.querySelector("#hard").addEventListener("click", () => {
  hardArrowsElement.forEach( (arrow) => {
    arrow.style.display = "block";
  });
  options.push("left-up", "right-up", "left-down", "right-down");
  startGame();
})

//                               FUNCTIONS
function startGame() {
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
        upChosen();
      } else if (computerSequence[i] === "down") {
        downChosen();
      } else if (computerSequence[i] === "right") {
        rightChosen();
      } else if (computerSequence[i] === "left") {
        leftChosen();
      } else if (computerSequence[i] === "left-up"){
        leftUpChosen();
      } else if (computerSequence[i] === "right-up"){
        rightUpChosen();
      } else if (computerSequence[i] === "left-down"){
        leftDownChosen();
      } else if (computerSequence[i] === "right-down"){
        rightDownChosen();
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

function upChosen(){
  monkeyElement.src = "./pictures/monkey-up.png";
  upSound.currentTime = 0;
  upSound.play();
  upArrowElement.style.zIndex = 1
  upArrowElement.style.boxShadow =
    "0 0 10px rgba(1, 1, 1), 0 0 21px rgba(1, 1, 1), 0 0 42px rgba(254, 25, 93, 1), 0 0 82px rgba(254, 25, 93, 1),0 0 92px rgba(254, 25, 93, 1), 0 0 102px rgba(254, 25, 93, 1)"; // up arrow lights up
  setTimeout(() => {
    upArrowElement.style.removeProperty("box-shadow");
    monkeyElement.src = "./pictures/final-still-monkey.png";
  }, "500");
}

function downChosen(){
  monkeyElement.src = "./pictures/monkey-down.png"
  downSound.currentTime = 0;
  downSound.play();
  downArrowElement.style.zIndex = 1
  downArrowElement.style.boxShadow =
    "0 0 10px rgba(1, 1, 1), 0 0 21px rgba(1, 1, 1), 0 0 42px rgba(254, 25, 93, 1), 0 0 82px rgba(254, 25, 93, 1),0 0 92px rgba(254, 25, 93, 1), 0 0 102px rgba(254, 25, 93, 1)"; // down arrow lights up
  setTimeout(() => {
    downArrowElement.style.removeProperty("box-shadow");
    monkeyElement.src = "./pictures/final-still-monkey.png";
  }, "500");
}

function rightChosen(){
  monkeyElement.src = "./pictures/monkey-right.png"
  rightSound.currentTime = 0;
  rightSound.play();
  rightArrowElement.style.zIndex = 1
  rightArrowElement.style.boxShadow =
    "0 0 10px rgba(1, 1, 1), 0 0 21px rgba(1, 1, 1), 0 0 42px rgba(52, 11, 255, 1), 0 0 82px rgba(52, 11, 255, 1),0 0 92px rgba(52, 11, 255, 1), 0 0 102px rgba(52, 11, 255, 1)"; //right arrow lights up
  setTimeout(() => {
    rightArrowElement.style.removeProperty("box-shadow");
    monkeyElement.src = "./pictures/final-still-monkey.png";
  }, "500");
}

function leftChosen(){
  monkeyElement.src = "./pictures/monkey-left.png"
  leftSound.currentTime = 0;
  leftSound.play();
  leftArrowElement.style.zIndex = 1;
  leftArrowElement.style.boxShadow =
    "0 0 10px rgba(1, 1, 1), 0 0 21px rgba(1, 1, 1), 0 0 42px rgba(52, 11, 255, 1), 0 0 82px rgba(52, 11, 255, 1),0 0 92px rgba(52, 11, 255, 1), 0 0 102px rgba(52, 11, 255, 1)"; // left arrow lights up
  setTimeout(() => {
    leftArrowElement.style.removeProperty("box-shadow");
    monkeyElement.src = "./pictures/final-still-monkey.png";
  }, "500");
}

function leftUpChosen(){
        monkeyElement.src = "./pictures/left-up-monkey.png";
        //sound time
        //sound play
        leftUpArrowElement.style.zIndex = 1;
        leftUpArrowElement.style.boxShadow =
        "0 0 10px rgba(1, 1, 1), 0 0 21px rgba(1, 1, 1), 0 0 42px rgba(106, 229, 106, 1), 0 0 82px rgba(106, 229, 106, 1),0 0 92px rgba(106, 229, 106, 1), 0 0 102px rgba(106, 229, 106, 1)"; 
        setTimeout(() => {
          leftUpArrowElement.style.removeProperty("box-shadow");
          monkeyElement.src = "./pictures/final-still-monkey.png";
        }, "500");
}

function rightUpChosen(){
        monkeyElement.src = "./pictures/right-up-monkey.png";
        //sound time
        //sound play
        rightUpArrowElement.style.zIndex = 1;
        rightUpArrowElement.style.boxShadow =
        "0 0 10px rgba(1, 1, 1), 0 0 21px rgba(1, 1, 1), 0 0 42px rgba(106, 229, 106, 1), 0 0 82px rgba(106, 229, 106, 1),0 0 92px rgba(106, 229, 106, 1), 0 0 102px rgba(106, 229, 106, 1)"; 
        setTimeout(() => {
          rightUpArrowElement.style.removeProperty("box-shadow");
          monkeyElement.src = "./pictures/final-still-monkey.png";
        }, "500");
}

function leftDownChosen() {
        monkeyElement.src = "./pictures/left-down-monkey.png";
        //sound time
        //sound play
        leftDownArrowElement.style.zIndex = 1;
        leftDownArrowElement.style.boxShadow =
        "0 0 10px rgba(1, 1, 1), 0 0 21px rgba(1, 1, 1), 0 0 42px rgba(106, 229, 106, 1), 0 0 82px rgba(106, 229, 106, 1),0 0 92px rgba(106, 229, 106, 1), 0 0 102px rgba(106, 229, 106, 1)"; 
        setTimeout(() => {
          leftDownArrowElement.style.removeProperty("box-shadow");
          monkeyElement.src = "./pictures/final-still-monkey.png";
        }, "500");
}

function rightDownChosen() {
        monkeyElement.src= "./pictures/left-down-monkey.png";
        //sound time
        //sound play
        rightDownArrowElement.style.zIndex = 1;
        rightDownArrowElement.style.boxShadow =
        "0 0 10px rgba(1, 1, 1), 0 0 21px rgba(1, 1, 1), 0 0 42px rgba(106, 229, 106, 1), 0 0 82px rgba(106, 229, 106, 1),0 0 92px rgba(106, 229, 106, 1), 0 0 102px rgba(106, 229, 106, 1)"; 
        setTimeout(() => {
          rightDownArrowElement.style.removeProperty("box-shadow");
          monkeyElement.src = "./pictures/final-still-monkey.png";
        }, "500");
}

function activateEventListener() {
  window.addEventListener("keyup", updatePlayerSequence);
}

function updatePlayerSequence(event) {
  if (event.code === "ArrowUp") {
    playerSequence.push(options[0]);
    upChosen();
    checkLastIndex();
  } else if (event.code === "ArrowDown") {
    playerSequence.push(options[1]);
    downChosen();
    checkLastIndex();
  } else if (event.code === "ArrowRight") {
    playerSequence.push(options[2]);
    rightChosen();
    checkLastIndex();
  } else if (event.code === "ArrowLeft") {
    playerSequence.push(options[3]);
    leftChosen();
    checkLastIndex();
  } else if (event.code === "KeyQ"){
    playerSequence.push(options[4]);
    leftUpChosen();
    checkLastIndex();
  } else if (event.code === "KeyW"){
    playerSequence.push(options[5]);
    rightUpChosen();
    checkLastIndex();
  } else if (event.code === "KeyA"){
    playerSequence.push(options[6]);
    leftDownChosen();
    checkLastIndex();
  } else if (event.code === "KeyS"){
    playerSequence.push(options[7]);
    rightDownChosen();
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
  }
}

function updateScore() {
    scoreSound.play();
    playerScore += 1;
    if (playerScore > highScore){
      highScore = playerScore;
      highScoreElement.textContent = "High Score: " + highScore;
    }
    scoreElement.textContent = "Score: " + playerScore;
    checkWin();
}

function checkWin() {
  if (playerScore === 10 && clickedInfinite == false) {
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
