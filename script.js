// Function to generate password
function generatePassword(){

  // Create password variable values
  var lowercase = 'abcdefghijklmnopqrstuvwxyz';
  var uppercase = 'ABCDEFGHIJKLMNOPRSTUVWXYZ';
  var number = '1234567890';
  var special = '~!@#$%^&*()_+{}:?><;.,';
  var buildPassword = '';
  var password = '';

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

  // Use input to select characters from declared arrays and include selections in resulting password
  if (selectLowercase) {buildPassword += lowercase}
  if (selectUppercase) {buildPassword += uppercase}
  if (selectNumber) {buildPassword += number}
  if (selectSpecial) {buildPassword += special}

  // Loop to iterate through the characters the user selects until the desired length is reached
  for (let i = 0; i < length; i++){
    password += buildPassword [Math.floor(Math.random () * buildPassword.length)];
  }
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  alert("Your new password is: " + password)
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
