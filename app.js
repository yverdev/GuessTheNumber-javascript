    /* Algorithm:
      1-Generate a random number between 1 and 100
      2-Store the number of laps already played starting at 1
      3-Create the player input box
      4-Check if the number entered is correct
      5-If correct:
          - Display a message of congratulations
          - Prevent the player from re-entering a number
          - Display the number of laps
          - Ask the player if he wants to restart a game
      6- If false:
          - Inform the player that his proposal is false
          - Tell the player if he is above or below the figure to guess
          - Allow the player to enter a new proposal
          - Increment the lap counter by 1
      7- If false is that the player has no more turn to play:
          - Inform the player that he has lost and that the game is over
          - Prevent the player from entering a new number
          - Ask the player if he wants to restart a game
      8- Once the game is restarted, make sure that the game logic and the user interface are completely reset.
      9- Return to step 1*/
    
    // variables required for data storage
    let guesses = document.querySelector('.guesses');
    let lastResult = document.querySelector('.lastResult');
    let lowOrhi = document.querySelector('.lowOrHi');
    let guessSubmit = document.querySelector('.guessSubmit');
    let guessField = document.querySelector('.guessField');

    let guessCount = 1;
    let restButton;
    
    let randomNumber = Math.floor(Math.random()*100) + 1;








      