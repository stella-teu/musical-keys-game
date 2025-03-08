# Simon Game
A Simon game inspired by Dance, Dance, Revolution.

## User Story

- As a user, I want to see a landing page that let's me know I'm at the right place.
- As a user, I want to see a start button, so I won't miss the start of the game.
- As a user, I want to see 4 buttons that clearly symbolize the up, down, left and right buttons.
- As a user, I want to be able to easily click these buttons.
- As a user, I want a visual and auditory signifier that will show me what sequence of buttons I must click (i.e. color of button changes, opacity goes up, etc...)
- As a user, I want to see the same visual and auditory signifier when clicking a button.
- As a user, I want the game to start with one button, wait for me to copy, then add to the sequence bit by bit.
- As a user, I want the game not change, but simply add on to its current sequence until I lose.
- As a user, I want to see my points keeping track every time I copy the sequence right.
- As a user, I want to see a "game over" message and a restart button when I lose.
- As a user, I want to see a "winner" message when I have succesfully copied a sequence of 10 buttons.

## Pseudocode

```
// 1. Define a constant for up, down, left and right arrows.

// 2. Define variables for:
    // the computer's sequence (array)
    // the player's sequence (array)
    // the player's score
    // options (array) with button directions
    // click count = 0 

// 3. Save cache element for  game message.

// 4. Add event listeners to:
    // start button
    // up button element
    // down button element
    // right button element
    // left button element
    // restart button element

// 5. Create startGame() function, which calls init() and makes the start game button disappear. Call this when clicking the start button throug an event listener.

// 6. Create an init() function which will keep track of all the variables.
    // at game start: set computer and player sequence, score and game message empty.
    // call updateComputerSequence()
    // call a render() function to update all variables

// 7. Create a render() function:
    // set click count to 0
    // calls updateScore()
    // calls checkWin()

// 8. Create a updateComputerSequence() function:
    // randomly chooses a button to start sequence from choices array
    // activates chosen button with visual and auditory signifier
    // saves choice to computer sequence array

// 9. Create an updatePlayerSequence() function:
    // use event listeners from buttons to save player's choice in the player's sequence array AND add 1 to click count
    // also activate visual and auditory signifier through event listener
    // IF click count matches the computer sequence's arrat length, call render()

// 10. Create an updateScore() function which adds 1 to player's score IF player sequence array matches computer sequence array.

// 11. Create checkWin() function:
    //  IF score = 10, set game message to congratulatory message.
    // ELSE IF the game sequence and player sequence don't match, set game message to losing message.
    // ELSE IF call updateComputerSequence().

// 12. Call init() when reset button is clicked through event listener.
```