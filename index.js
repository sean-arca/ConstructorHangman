var inquirer = require("inquirer");
var WordJS = require("./Word.js");

// Global Variables
var turnsLeft = 10;
var words = ["tyrannosaurus", "pterodactyl", "triceratops", "brontosaurus", "velociraptor", "stegosaurus"];
var wordIndex = Math.floor(Math.random() * words.length);
var currentWord = new WordJS.Word(words[wordIndex]);

// Letter Arrays
var lettersGuessed = [];
var lettersCorrect = [];

var newGame = false;

// Function to start the game
function startGame() {
    // console.log(turnsLeft);
    // console.log(currentWord.showWord());
    if (newGame === false && turnsLeft === 10) {
        console.log('WELCOME TO JURASSIC PARK! - We hope you enjoy your stay! What is the secret password?');
        currentWord.showWord();
        newGame = true;
    }
    
    // Inquirer
    inquirer.prompt(
        {
            type: 'input',
            name: 'userInput',
            message: "You hear a scary dinosaur coming, quickly!"
        }
    ).then(function (answer) {
        var userInput = answer.userInput;
        // Check IF letter has been pressed already
        if (lettersGuessed.includes(userInput)) {
            console.log(`Error! Error! You've already pressed the letter -- ${userInput} -- try again`);
        }
        // Else push it into array of letters guessed
        else {
            lettersGuessed.push(userInput);
            // console.log(lettersGuessed);
        };

        // Check if userInput = any of the currentWord's letters
        if (currentWord.guess(userInput) === true) {
            currentWord.theWord.split("").forEach(function(element) {
                // Push correct letters in lettersCorrect array
                if (userInput === element) {
                    lettersCorrect.push(userInput);
                }
                if (element === "") {
                    lettersCorrect.push(element);
                }
            })

            console.log(`That's Right! \n You have ${turnsLeft} turns left before the dino gets ya!`);
            score();
        } else {
            turnsLeft--;
            console.log(`That's Not It! \n You have ${turnsLeft} turns left before the dino gets ya!`);
            score();
        }
    })
};

// Start Game
startGame();
// console.log(currentWord);

// Function to keep score
function score () {
    // Check IF more turns left than letters 
    if (turnsLeft > 0 && lettersCorrect.length < currentWord.theWord.length) {
        startGame();
    };

    // Winning message for current word
    if (turnsLeft > 0 && lettersCorrect.length === currentWord.theWord.length) {
        console.log(`Phew, You escaped. Look out! Something else is coming! - Can you spell out it's name!?`);

        // Remove previous word from list
        words.splice(wordIndex, 1);

        // Winning message for game!
        if (words.length === 0) {
            console.log("YOU'VE ESCAPED ALL THE DINOS. CONGRATULATIONS! YOU CAN LEAVE JURASSIC PARK NOW - CYA NEXT TIME!");
            return;
        };

        // Reset
        wordIndex = Math.floor(Math.random() * words.length);
        currentWord = new WordJS.Word(words[wordIndex]);
        turnsLeft = 10;
        lettersCorrect = [];
        lettersGuessed = [];
        currentWord.showWord();
        startGame();
    };

    // Losing message
    if (turnsLeft === 0 && lettersCorrect.length !== currentWord.theWord.length) {
        console.log("YOU HAVE BEEN EATEN. WOMP WOMP.");
    }
}
