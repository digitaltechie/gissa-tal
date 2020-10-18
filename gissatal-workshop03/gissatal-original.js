//FUNCTION TO RANDOMIZE NUMBER

/*  
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
    
 */    
console.log('Welcome! Guess the number (Enter any whole number between 1-100. 0 to exit.)');

//generate a random number
let fnRandomizeNumber = function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max-min+1) + min);
};
/* Logging number */
/* console.log(`The function (with ceil, floor) to randomize number between 1 and 100 is ${fnRandomizeNumber(1,100)}`); */

        /* Generating with Math.random and round */
        /* let rndGenerator = Math.round(Math.random()*100);
        console.log(`The Math.random rounded number *100 is: ${Math.floor(Math.random()*100)}`); */

    let userNumber = 1;
    let randomNumber = 0;
    let topScore =100;
    let previousScore =0;
    let countGuesses =0;
    let userChoice = 1;
    randomNumber = fnRandomizeNumber(1,100);
    
    do {
        userNumber=1; 
        randomNumber = fnRandomizeNumber(1,100);
        countGuesses = 0;
        while (userNumber != 0 && userNumber != randomNumber) {
            userNumber = window.prompt('Enter a number between 1-100:', 50);
            if (userNumber == 0){
                console.log('You entered 0. Exiting game...');
                break;
            } else if (userNumber < randomNumber){
                    console.log(`Your number ${userNumber} is too small! Try again.`);
                }
                else if (userNumber > randomNumber){
                    console.log(`Your number ${userNumber} is too big! Try again.`);
                }
                console.log(`(Pssst. The number is  ${randomNumber} )`);
                countGuesses++;
        }
        //checking values outside while loop. Scope is global as globally declared.
    /*   console.log(`User number is: ${userNumber}
        and Random number is ${randomNumber}.` ); */
        
        if (userNumber == randomNumber) {
            previousScore = topScore;
            topScore = ( countGuesses > topScore)  ? topScore : countGuesses ;
            if (previousScore < countGuesses){
                console.log(`Yes. The number is ${randomNumber}. Congratulations! This time you got it in ${countGuesses} tries! (The top score is ${topScore}.) 
                Do you want to play again?(1 to play again, 0 to exit game)`);
            } else if (previousScore > countGuesses){
                console.log(`Yes. The number is ${randomNumber}. Congratulations! You have the top score of least tries at ${topScore} guesses (Previous top score was ${previousScore})!  
                Do you want to play again?(1 to play again, 0 to exit game)`);
            }
            userChoice = window.prompt('Do you want to play again? (1 to play again, 0 to exit.)',1);
            if (userChoice == 0){
                console.log('exiting game... ');
                break; 
            } else {
                console.log(`Playing again. Enter a number...`);
            }
        }
     } while (userChoice !=0); 
