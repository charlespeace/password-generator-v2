// Assignment code here
// Create password variable values
function generatePassword(){
  var character = '~!@#$%^&*()_+{}:?><;.,';
  var number = '1234567890';
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  var caps = 'ABCDEFGHIJKLMNOPRSTUVWXYZ';
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
