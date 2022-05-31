var displayArray = [];

var randomPasswordArray = [];

var randomLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


var randomUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];



var randomNum = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var randomSpecialChar = ["!","@","#","$","%","^","&","*","(",")","{","}","[","]","=","<",">","/",",","."]

//Generate Funcion
function generatePassword() {

    //Length of passwtord
charLength = prompt("How many characters would you want your password to be between 8-128");
    if (charLength < 8 || charLength > 128) {
    return alert("Please enter a valid length");
    } else if (isNaN(charLength)) {
        charLength = alert("Please enter a valid number");
    }
    else {
        alert("Your password will be " + charLength + " characters long.")
    }

//prompt: Lowercase
var confirmLower = confirm("Do you want your password to include 'lowercase' character letters click 'OK' if yes or 'Cancel' if no.")
    if (confirmLower) {
    displayArray = displayArray.concat(randomLower);
    }

// prompt: Uppercase
var confirmUpper = confirm("Do you want your password to include 'UPPERCASE' character letters click 'OK' if yes or 'Cancel' if no.")
    if (confirmUpper) {
        displayArray = displayArray.concat(randomUpper);
    }

// prompt: Numbers
var confirmNum = confirm("Do you want your password to include 'NUMBER' character letters click 'OK' if yes or 'Cancel' if no.")
    if (confirmNum) {
        displayArray = displayArray.concat(randomNum);
    }
// prompt: Special Characters
var confirmSpecialChar = confirm("Do you want your password to include 'SPECIAL' characters click 'OK' if yes or 'Cancel' if no.")
    if (confirmSpecialChar) {
        displayArray = displayArray.concat(randomSpecialChar);
    } 
    
    let passowrdDisplay = ""
        for (let i = 0; i < charLength; i++) {
            let rng = [Math.floor(Math.random() * displayArray.length)];
            passowrdDisplay = passowrdDisplay + displayArray[rng];
        }
        return passowrdDisplay;
};


//Assignment Code
var generateBtn = document.querySelector("#generate");

//Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword)