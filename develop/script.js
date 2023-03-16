
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.']
var allCharacters = []
var passwordHtmlText = document.querySelector('#password')
var password = ""
var generateBtn = document.querySelector("#generate")

function generatePassword() {
  console.log("Clicked 'Generate Password' button.");

  var passwordLength = parseInt(prompt("Choose password length between 8 and 128."));
  console.log(passwordLength)

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a number between 8 and 128.");
    return generatePassword();
  }

  if (!passwordLength) {
    console.log("stop");
    alert("Please enter a valid number.");
    return generatePassword();
  }

  var includeNumbers = confirm("Include numbers?");

  if (includeNumbers) {
    allCharacters = allCharacters.concat(numericCharacters);
  }

  var includeLowerCased = confirm("Include lowercased?");

  if (includeLowerCased) {
    allCharacters = allCharacters.concat(lowerCasedCharacters);
  }

  var includeUpperCased = confirm("Include uppercase?");

  if (includeUpperCased) {
    allCharacters = allCharacters.concat(upperCasedCharacters);
  }

  var includeSymbols = confirm("Include special characters?");

  if (includeSymbols) {
    allCharacters = allCharacters.concat(specialCharacters);
  }

  console.log(allCharacters);

  for(let i = 0; i < passwordLength; i++) {
    password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
  console.log(password)
  }

  return password;
}

function writePassword() {
  var newPassword = generatePassword();
  newPassword = '' ? passwordHtmlText = "No Password Created" : passwordHtmlText.value = password
}

generateBtn.addEventListener("click", writePassword);
