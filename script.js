// Assignment code here
// Function to generate password
function generatePassword(){

  // Create password variable values
  var lowercase = 'abcdefghijklmnopqrstuvwxyz';
  var uppercase = 'ABCDEFGHIJKLMNOPRSTUVWXYZ';
  var number = '1234567890';
  var special = '~!@#$%^&*()_+{}:?><;.,';
  var buildPassword = '';

  // Prompt for desired length
  var length = prompt('Indicate a password length of 8 to 128 characters')

  // Check that response meets requirements
  if (length>=8 && length <=128) {
    alert('Next, choose what type of characters to include in your new password')
  }

  // Return alert if response does not meet requirements
  else {
    alert('You must enter a value greater than 7 and less than 129!')
    return '';
  }

  // Prompt for lowercase letters
  var selectLowercase = confirm('Include lowercase letters?')

  // Prompt for uppercase letters
  var selectUppercase = confirm('Include uppercase letters?')

  // Prompt for numbers
  var selectNumber = confirm('Include numbers?')
  
  // Prompt for special characters
  var selectSpecial = confirm('Include special characters?')

  // Return alert if no responses recorded
  if (!selectLowercase && !selectUppercase && !selectNumber && !selectSpecial) {
  return alert('You must chooose at least one type of character to be included!');
  }

  // Randomly select characters based on user selections and add them to build result
  if (selectLowercase) {buildPassword += lowercase}
  if (selectUppercase) {buildPassword += uppercase}
  if (selectNumber) {buildPassword += number}
  if (selectSpecial) {buildPassword += special}
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
