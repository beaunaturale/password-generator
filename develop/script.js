
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
var allCharacters = [];
var passwordLength = []; // between 8 and 128

// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("Clicked 'Generate Password' button.");

  var password = "";
  for(let i = 8; i <= 128; i++) {

    var randomIndex = Math.floor(Math.random() * allCharacters.length);
  
    password = password + allCharacters[randomIndex];
  
  }

//prompt user for pw criteria

//length 8<= i <= 128
  passwordLength = prompt("Choose password length between 8 and 128.");

 if (!passwordLength) return "No Password Created"

  passwordLength = parseInt(passwordLength);
  console.log(typeof passwordLength, passwordLength);

  if (!passwordLength) {
    console.log("stop");
    alert("Please enter a valid number.");
    return generatePassword();
  }

if (passwordLength < 8 || passwordLength > 128) {
  alert("Please enter a number between 8 and 128.");
  return generatePassword();
}
//lowercase, uppercase, numbers, special characters
var includeNumbers = confirm("Include numbers?");

if (includeNumbers) {
  allCharacters = allCharacters.concat(numericCharacters);
}

console.log(allCharacters);

var includeLowerCased = confirm("Include lowercased?");

if (includeLowerCased) {
  allCharacters = allCharacters.concat(lowerCasedCharacters);
}

console.log(allCharacters);

var includeUpperCased = confirm("Include uppercase?");

if (includeUpperCased) {
  allCharacters = allCharacters.concat(upperCasedCharacters);
}

console.log(allCharacters);

var includeSymbols = confirm("Include special characters?");

if (includeSymbols) {
  allCharacters = allCharacters.concat(specialCharacters);
}

console.log(allCharacters);

return "password here";
}

//validate input
//generate pw
//display pw 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var allCharacters = generatePassword;

  if(allCharacters) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  }
  
}







