// Letter Constructor
function Letter (character) {
    this.character = character;
    this.charGuess = false;
    // Function to Show Character
    this.showChar = function () {
        if (this.charGuess) {
            return this.character;
        } else {
            return ' _ ';
        }
    };
    // Function to Check Character against user input
    this.checkChar = function (userInput) {
        if (userInput === this.character) {
            this.charGuess = true;
            return true;
        } else {
            return false;
        }
    }
};

module.exports = Letter;

// Test
// var a = new Letter("A");
// // console.log(a);
// console.log(a.checkChar());