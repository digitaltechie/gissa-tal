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

    //VARIABLE DECLARATION AND INITIALIZATION 
    let userNumber = 1;
    let randomNumber = 0;
    let topScore =100;
    let previousScore =0;
    let countGuesses =0;
    let userChoice = 1;
    randomNumber = fnRandomizeNumber(1,100);

    //FUNCTION EXPRESSION to reset variables 
    const resetVariables = function(){
        userNumber=1; 
        randomNumber = fnRandomizeNumber(1,100);
        countGuesses = 0;
        console.log('resetting variables function here');
        /* console.log(`resetVariables here! userNumber is ${userNumber} randomNumber is ${randomNumber} countGuesses  is ${countGuesses}  `); */ //TESTING MY CODE
    };   

    //FUNCTION EXPRESSION looping while input is not correct or 0
    let evaluateUserInput = function(userInput, randomGenerated) {
        while (userInput != 0 && userInput != randomGenerated) {
            userInput = window.prompt('Enter a number between 1-100:', 50);
            if (userInput == 0){
                console.log('FIRST BREAK. You entered 0...Exit?');
                //doUserExit();  // calling exit function //setting do while loop condition to exit 
                 break; 
            } else if (userInput < randomGenerated){
                    console.log(`Your number ${userInput} is too small! Try again.`);
                }
                else if (userInput > randomGenerated){
                    console.log(`Your number ${userInput} is too big! Try again.`);
                }
                console.log(`(Pssst. The number is  ${randomGenerated} )`);
                countGuesses++;
                /* return countGuesses; */
        }if (userInput == randomGenerated) {
            userGuessedNumber(countGuesses, randomGenerated);
        }
    };    
    //FUNCTION EXPRESSION output when user guesses the right number
    let userGuessedNumber = function(userTries, randomNum){
                
        if (topScore < userTries){
            console.log(`Yay! The number is ${randomNum}. Congratulations! This time you got it in ${userTries} tries! (The top score is ${topScore}.) 
            `);
        } else if (topScore >= userTries){
            console.log(`Yay! The number is ${randomNum}. Congratulations! You have the top score of least tries at ${userTries} guesses (Previous top score was ${topScore})!  
            `);
        }
        topScore = ( userTries <= topScore) ? userTries : topScore;
    };
    //FUNCTION EXPRESSION ask the user to continue or exit
    const doUserExit = function(){
        console.log('Do you want to play again?(1 to play again, 0 to exit game)');
        userChoice = window.prompt('Do you want to play again? (1 to play again, 0 to exit.)',1);
        if (userChoice == 0){
            console.log('SECOND BREAK. exiting game... ');
            /* break */;     
            } else {
            console.log(`Playing again. Enter a number...`);
            }
            return userChoice;
    };
    
    //THE ACTUAL PROGRAM STARTS
    do {
        resetVariables();
        evaluateUserInput(userNumber, randomNumber);     
        console.log('evaluate function exited, now before first break. countGuesses is ' + countGuesses);
       /*  doUserExit();*/
    /*      console.log('doUserExit before loop exit' + doUserExit()); */
     } while (doUserExit() !=0); 
/*      console.log('doUserExit after loop exit' + doUserExit());
 */