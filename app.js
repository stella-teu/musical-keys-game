//                               VARIABLES
let computerSequence = [];
let playerSequence = [];
let playerScore = 0;
let options = ["up", "down", "right", "left"];
let keyCount = 0;

//                               CACHED ELEMENTS
const gameMessage = document.querySelector("#message")

//                               EVENT LISTENERS

//                               FUNCTIONS

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

// 4. Create startGame() function, which calls init() and makes the start game button disappear. Call this when clicking the start button throug an event listener.

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
    // ELSE IF call updateComputerSequence().

// 11. Call init() when reset button is clicked through event listener.