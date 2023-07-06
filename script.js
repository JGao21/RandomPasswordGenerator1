// Assignment JavaScript Code
// Query selectors
var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password");

// variables for all upper and lowercase letters, numbers, and characters)
var specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var lowercaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
var uppercaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var optionsVariable = "";

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write a function that generates a random password in the "text area" box
function writePassword() {

    // Prevent the screen from refreshing when whe button is clicked
    event.preventDefault();

    // Clear previous password from screen
    password.value === "";
    var randomString = "";

    // Chose password criteria
    var lowercaseLett = confirm("Do you want your password to contain lowercase letters?");
    var uppercaseLett = confirm("Do you want your password to contain uppercase letters?");
    var num = confirm("Do you want your password to contain numbers?");
    var specialChar = confirm("Do you want your password to contain special characters?");
    var passwordLength = prompt("Choose a password length of at least 8 characters and no more than 128 characters.");


//    a. Password length 8 < 128
    if (passwordLength < 8 || passwordLength > 128) {
        alert("Your password is not between 8 characters and 128 characters. Please try again.");
        var passwordLength = prompt("Choose a password length of at least 8 characters and no more than 128 characters.");
    }


//    b. Lowercase, uppdercase, numbers, special characters
    else if (lowercaseLett === false && uppercaseLett === false && num === false && specialChar === false) {
        alert("You must chose at least one password criteria.");
        var lowercaseLett = confirm("Do you want your password to include lowercase letters?");
        var uppercaseLett = confirm("Do you want your password to include uppercase letters?");
        var num = confirm("Do you want your password to include numbers?");
        var specialChar = confirm("Do you want your password to include special characters?");
    }


// 2. Validate the input
    if (lowercaseLett) {
        optionsVariable += lowercaseAlphabet;
    }

    if (uppercaseLett) {
        optionsVariable += uppercaseAlphabet;
    }

    if (num) {
        optionsVariable += numbers;
    }

    if (specialChar) {
        optionsVariable += specialCharacters;
    }

    // 3. Generate password randomness based on criteria
    for (var i = 0; i < passwordLength; i++) {
        // Continues to select a random character value from the string until it is the desired length
        randomString += optionsVariable.charAt(Math.floor(Math.random() * optionsVariable.length));
    }
    password.value = randomString;

}