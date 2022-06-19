//Generate Funcion
var displayPassword = [];

const randomLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const randomUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const randomNum = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const randomSpecialChar = ["!","@","#","$","%","^","&","*","(",")","{","}","[","]","=","<",">","/",",","."];

function generatePassword() {

    //Length of passwtord
charLength = prompt("How many characters would you want your password to be between 8-128?");
    if (charLength < 8 || charLength > 128) {
    return alert("Please enter a valid length.");
    } else if (isNaN(charLength)) {
        return alert("Please enter a valid number.");
    }
    else {
        alert("Your password will be " + charLength + " characters long.");
    }

//prompt: Lowercase
confirmLower = confirm("Do you want your password to include 'lowercase' letters? Click 'OK' if yes or 'Cancel' if no.")
    if (confirmLower) {
        alert("Your password will include 'lowercase' characters.");
        displayPassword = displayPassword.concat(randomLower);

    } else {
        alert("Your password will not include 'lowercase' characters.");
    }

// prompt: Uppercase
confirmUpper = confirm("Do you want your password to include 'UPPERCASE' character letters click 'OK' if yes or 'Cancel' if no.")
    if (confirmUpper) {
        alert("Your password will include 'UPPERCASE' characters.");
        displayPassword = displayPassword.concat(randomUpper);
    } else {
        alert("Your password will not include 'UPPERCASE' characters.");
    }

// prompt: Numbers
confirmNum = confirm("Do you want your password to include 'NUMBER' characters? Click 'OK' if yes or 'Cancel' if no.")
    if (confirmNum) {
        alert("Your password will include numbers.");
        displayPassword = displayPassword.concat(randomNum);
    } else {
        alert("Your password will not include Numbers");
    }

// prompt: Special Characters
confirmSpecialChar = confirm("Do you want your password to include 'SPECIAL' characters? Click 'OK' if yes or 'Cancel' if no.")
    if (confirmSpecialChar) {
        displayPassword = displayPassword.concat(randomSpecialChar);
        alert("Your password will include 'SPECIAL' characters.");
    } else {
        alert("Your password will not include 'SPECIAL' characters.");
    }
    
    let passowrdDisplay = ""
        for (let i = 0; i < charLength; i++) {
            let rng = [Math.floor(Math.random() * displayPassword.length)];
            passowrdDisplay = passowrdDisplay + displayPassword[rng];
        }

        //
        if (confirmLower === false && confirmUpper === false && confirmNum === false && confirmSpecialChar === false) {
            return "Please select at least one character type.";
        };

        return passowrdDisplay;
};


//Assignment Code
var generateBtn = document.querySelector("#generate");

//Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
};

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);