var Letter = require("./Letter.js");

// Word Constructor
function Word (theWord) {
    this.theWord = theWord;
    this.wordArr = theWord.split('').map(x => new Letter(x));

    // Function to show the word
    this.showWord = function() {
        var shownWord = [];
        this.wordArr.forEach(function (element) {
            shownWord.push(element.showChar());
        })
        console.log(`${shownWord.join(" ")}\n`);
    },

    // Function to check if guess input is the same as word
    this.guess = function (userInput) {
        var letterGuess = false;
        this.wordArr.forEach(function (element) {
            // If user input = letter, set booleans to true
            if (userInput === element.character) {
                element.charGuess = true;
                letterGuess = true;
            };
        });

        // If letterGuess = true, then show
        if (letterGuess === true) {
            this.showWord();
            return true;
        };
        
        // If letterGuess = false, don't update
        if (letterGuess === false) {
            this.showWord();
            return false;
        }
    }
}

//Test
// var test = new Word("test");
// console.log(test);


module.exports = {Word: Word};

