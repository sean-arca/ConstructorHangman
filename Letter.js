// Letter Constructor
function Letter (character) {
    this.character = character;
    this.guess = false;
    // Function to Show Character
    this.showChar = function () {
        if (this.guess) {
            return this.character;
        } else {
            return ' _ ';
        }
    };
    // Function to Check Character against user input
    this.checkChar = function (input) {
        if (input === this.character) {
            this.guess = true;
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