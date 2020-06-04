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
    let randomNumber = Math.floor(Math.random()*100) + 1;
    let guesses = document.querySelector('.guesses');
    let lastResult = document.querySelector('.lastResult');
    let lowOrhi = document.querySelector('.lowOrHi');
    let guessSubmit = document.querySelector('.guessSubmit');
    let guessField = document.querySelector('.guessField');

    let guessCount = 1;
    let restButton;
    

    function checkGuess(){
        
        let userGuess = Number(guessField.value);
        if (guessCount === 1) {
          guesses.textContent = 'Propositions précédentes : ';
        }

        guesses.textContent += userGuess + ' ';
       
        if (userGuess === randomNumber) {
          lastResult.textContent = 'Bravo, vous avez trouvé le nombre !';
          lastResult.style.backgroundColor = 'green';
          lowOrHi.textContent = '';
          setGameOver();
        } else if (guessCount === 10) {
           lastResult.textContent = '!!! PERDU !!!';
           setGameOver();
        } else {
           lastResult.textContent = 'Faux !';
           lastResult.style.backgroundColor = 'red';
           if (userGuess < randomNumber) {
            lowOrHi.textContent = 'Le nombre saisi est trop petit !';
           } else if (userGuess > randomNumber) {
            lowOrHi.textContent = 'Le nombre saisi est trop grand !';
           }
        }
       
        guessCount++;
        guessField.value = '';
        guessField.focus();
      }
      guessSubmit.addEventListener('click', checkGuess);

      function setGameOver() {
        guessField.disabled = true;
        guessSubmit.disabled = true;
        resetButton = document.createElement('button');
        resetButton.textContent = 'Start new game';
        document.body.appendChild(resetButton);
        resetButton.addEventListener('click', resetGame);
      }

      function resetGame() {
        guessCount = 1;
        const resetParas = document.querySelectorAll('.resultParas p');
        for(let i = 0 ; i < resetParas.length ; i++) {
          resetParas[i].textContent = '';
        }

        resetButton.parentNode.removeChild(resetButton);
        guessField.disabled = false;
        guessSubmit.disabled = false;
        guessField.value = '';
        guessField.focus();
        lastResult.style.backgroundColor = 'white';
        randomNumber = Math.floor(Math.random() * 100) + 1;
      }


      