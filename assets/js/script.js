// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  // must return a string value that is the password.
  // prompt user to choose number between 8 and 128
    // var to save length
    // validate user num
  // confirm user upper, lower, num, special characters (4 confirm prompts)
    // 4 vars to save T/F to included characters
    // validate that atleast one category was chosen
  // vars that include all user options of each category. Array of string for each category
  // var upper = ["A","B"]
  //if user says yes to include that cat choose random (Math.random) elements from the array
    // How to decide how many elements to choose from each array
  // join chosen elements into a string
  return passwordString;

};

// ** gonna need atleast 1 forloop **