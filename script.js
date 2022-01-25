// Assignment code here
// Function to generate password
function generatePassword(){

  // Create password variable values
  var character = '~!@#$%^&*()_+{}:?><;.,';
  var number = '1234567890';
  var lowercase = 'abcdefghijklmnopqrstuvwxyz';
  var uppercase = 'ABCDEFGHIJKLMNOPRSTUVWXYZ';

  // Prompt for desired length
  var length = prompt('Indicate a password length of 8 to 128 characters')

  // Check that response meets requirements
  if (length>=8 && length <=128) {
    console.log(length)
  }

  // Return alert if response does not meet requirements
  else {
    alert('You must enter a value greater than 7 and less than 129!')
    return '';
  }

  // Prompt for lowercase letters
  var ifLowercase = confirm('Include lowercase letters?')

  // Prompt for uppercase letters
  var ifUppercase = confirm('Include uppercase letters?')

  // Prompt for numbers
  var ifNumber = confirm('Include numbers?')
  
  // Prompt for special characters
  var ifCharacter = confirm('Include special characters?')

  // Return alert if no responses recorded
  if (!ifLowercase && !ifUppercase && !ifNumber && !ifCharacter) {
  return alert('You must chooose at least one type of character to be included!');
  }
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
