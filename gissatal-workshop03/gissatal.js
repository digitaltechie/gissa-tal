/*FUNCTION TO RANDOMIZE NUMBER
PSEUDOCODE PLAN    
RANDOMIZE A NUMBER randomNumber (fnRandomizeNumber() function with math rand)
        //(fnEvaluateInput() function to take and evaluate user input)                                                
    WHILE (userNumber !=0 && userNumber != randomNumber)
        {
        TAKE USER INPUT  userNumber (windows prompt)    
        IF userNumber > randomNumber
            OUTPUT too high, try again
        ELSE IF userNumber < randomNumber
            OUTPUT too low, try again    
        }
    IF CORRECT userNumber === randomNumber 
        highScore++
        TAKE USER INPUT  play again?
            YES, back to top
            NO, 0, EXIT
    ELSE IF 0
        exit game
 -----------------------------------------------------------*/

 //VARIABLE DECLARATION AND INITIALIZATION 
 let userNumber;
 let randomNumber;
 let topScore =100;
 let countGuesses;
 let userMaxChoice;

 //REGULAR FUNCTION. user sets max  range for the game    
    const setMaxRange = function(){
        console.log('Welcome to Guess the number!');
        console.log('Enter the maximum for the number range you want to play: 1-?. (Press enter for default 1000).');
        const userMaxInput = window.prompt('Enter the maximum for the number range you want to play: (1-?)', 1000);
        userMaxChoice=userMaxInput;
        return userMaxInput;
    }

//FUNCTION EXPRESSION generate a random number
    let fnRandomizeNumber = function(min, userMax) {
        userMax= setMaxRange();
        min = Math.ceil(1);
        max = Math.floor(userMax);
        return Math.floor(Math.random() * (userMax-min+1) + min);
    };

//FUNCTION EXPRESSION (ARROW FUNCTION) to reset variables when game restarted
    const resetVariables = ()=>{
        userNumber=1; 
        randomNumber = fnRandomizeNumber();
        countGuesses = 0;
        /* console.log(`resetVariables here! userNumber is ${userNumber} randomNumber is ${randomNumber} countGuesses  is ${countGuesses}  `); */ //TESTING MY CODE
    };  

    //FUNCTION EXPRESSION looping while input is not correct or 0
    let evaluateUserInput = function(userInput, randomGenerated) {
        userInput = window.prompt(`Enter a whole number between 1-${userMaxChoice}:`, 5);
        while (userInput != 0 && userInput != randomGenerated) {
            if (userInput == 0){
                break; 
            } else if (userInput < randomGenerated){
                    console.log(`Your number ${userInput} is too small! Try again.`);
                    userInput = window.prompt(`Your number ${userInput} is too small! Try again. (Enter a whole number between 1-${userMaxChoice}:)`, 5);
                }
                else if (userInput > randomGenerated){
                    console.log(`Your number ${userInput} is too big! Try again.`);
                    userInput = window.prompt(`Your number ${userInput} is too big! Try again. (Enter a whole number between 1-${userMaxChoice}:)`, 5);
                }
                /* console.log(`(Pssst. The number is  ${randomGenerated} )`);*/ //TESTING CODE
                countGuesses++;
        }if (userInput == randomGenerated) {
            userGuessedNumber(countGuesses, randomGenerated); //called if user wins
        }
    };    
    //FUNCTION EXPRESSION output when user guesses the right number
    let userGuessedNumber = function(userTries, randomNum){
        if (topScore < userTries){
            console.log(`Yay! The number is ${randomNum}. Congratulations! Got it in ${userTries} tries! (Top score: ${topScore}.) 
            `);
            alert(`Yay! The number is ${randomNum}. Congratulations! Got it in ${userTries} tries! (Top score: ${topScore}.) 
            `);
        } else if (topScore >= userTries){
            console.log(`Yay! The number is ${randomNum}. Congratulations! You have the top score of least tries at ${userTries} guesses! (Default top score was ${topScore}.)  
            `);
            alert(`Yay! The number is ${randomNum}. Congratulations! You have the top score of least tries at ${userTries} guesses! (Default top score was ${topScore}.)  
            `);
        }
        topScore = ( userTries <= topScore) ? userTries : topScore;
    };
    //FUNCTION EXPRESSION ask the user to continue or exit
    const doUserExit = function(){
        let userChoice;
        console.log('Do you want to exit?(1 to play again, 0 to exit game)');
        userChoice = window.prompt('Do you want to exit? (1 to play again, 0 to exit.)',1);
        if (userChoice == 0){
            console.log('Exiting game... ');
            alert('Thanks for playing! Bye.');
            /* break */;     
            } else {
            console.log(`Playing again. Enter a number...`);
            }
            return userChoice;
    };
    
    //FUNCTION EXPRESSION. ARROW FUNCTION. the main game code
    let theGame = function (){
        do {
            resetVariables();
            evaluateUserInput(userNumber, randomNumber);     
       
         } while (doUserExit() !=0);
    };

    document.getElementById('game-click-button').onclick = function(){theGame()};
    document.getElementById('game-click-text').onclick  = function(){theGame()};
     
