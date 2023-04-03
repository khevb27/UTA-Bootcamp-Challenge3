// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberChar = ["1","2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialChar = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "{", "}", "[", "]", ":", ";", ".", "?", ">", "<", "/"];
var passwordLength;
var lowercaseCheck;
var uppercaseCheck;
var numberCheck;
var specialCheck;


function checkLength(){
  passwordLength = prompt("Welcome! Let's generate a secure password for you. \nHow many characters would you like in your password? \n(Note: please choose a number between 8-128) ");

    if (passwordLength <8){
      alert ("Password length must be a number between 8-128 characters");
      checkLength();
    }else if (passwordLength >128){
      alert ("Password length must be a number between 8-128 characters");
      checkLength();
    }else if (isNaN(passwordLength)){
      alert ("Password length must be a number between 8-128 characters");
      checkLength();
    }else{
      alert("Your password will be " + passwordLength + " characters long.");
    }
    return passwordLength;
}

function checkLowercase(){
  lowercaseCheck = confirm("Do you want to include lowercase letters in your password? \n(Note: 'Cancel' = No | 'OK' = Yes)");
    // lowercaseCheck = lowercaseCheck.toLowerCase();

  if (lowercaseCheck) {
    alert("Your password will include lowercase characters.");
  }
  else {
    alert("Your password will NOT include lowercase characters.");
  }
    return lowercaseCheck;
}

function checkUppercase(){
  uppercaseCheck = confirm("Do you want to include uppercase letters in your password? \n(Note: 'Cancel' = No | 'OK' = Yes)");
    // uppercaseCheck = uppercaseCheck.toLowerCase();

  if (uppercaseCheck) {
    alert("Your password will include uppercase characters.");
  }
  else {
    alert("Your password will NOT include uppercase characters.");
  }
    return uppercaseCheck;
}

// check whether or not to include numbers in the password

function checkNumbers(){
  numberCheck = confirm("Do you want to include numbers in your password? \n(Note: 'Cancel' = No | 'OK' = Yes)");
    // numberCheck = numberCheck.toLowerCase();

    if (numberCheck) {
      alert("Your password will include numeric characters.");
    }
    else {
      alert("Your password will NOT include numeric characters.");
    }
      return numberCheck;
}

// check whether or not to include special characters in the password

function checkSpecial(){
  specialCheck = confirm("Do you want to include special characters in your password? \n(Note: 'Cancel' = No | 'OK' = Yes)");
    // specialCheck = specialCheck.toLowerCase();

    if (specialCheck) {
      alert("Your password will include special characters.");
    }
    else {
      alert("Your password will NOT include special characters.");
    }
      return specialCheck;
}

// // Combine previous functions' input and generate a password using a forloop 

// function generatePassword(){
//   checkLength();
//   console.log(passwordLength);
//   checkLowercase();
//   console.log(lowercaseCheck);
//   checkUppercase();
//   console.log(uppercaseCheck);
//   checkNumbers();
//   console.log(numberCheck);
//   checkSpecial();
//   console.log(specialCheck);

// var characters = lowercaseChar;
// var password = "";

// if (lowercaseCheck && uppercaseCheck && numberCheck && specialCheck){
//   characters += lowercaseChar + uppercaseChar + numberChar + specialChar;

// }else if (lowercaseCheck && uppercaseCheck && numberCheck){
//   characters += lowercaseChar + uppercaseChar + numberChar;

// }else if (lowercaseCheck && numberCheck && specialCheck){
//   characters += lowercaseChar + numberChar + specialChar;

// }else if (lowercaseCheck && uppercaseCheck && specialCheck){
//   characters += lowercaseChar + uppercaseChar + specialChar;

// }else if (uppercaseCheck && numberCheck && specialCheck){
//   characters += uppercaseChar + numberChar + specialChar;

// }else if (lowercaseCheck && uppercaseCheck){
//   characters += lowercaseChar + uppercaseChar;

// }else if (lowercaseCheck && numberCheck){
//   characters += lowercaseChar + numberChar;

// }else if (lowercaseCheck && specialCheck){
//   characters += lowercaseChar + specialChar;

// }else if (uppercaseCheck && numberCheck){
//   characters += uppercaseChar + numberChar;

// }else if (uppercaseCheck && specialCheck){
//   characters += uppercaseChar + specialChar;

// }else if (numberCheck && specialCheck){
//   characters += numberChar + specialChar;

// }else if (lowercaseCheck){
//   characters += lowercaseChar;

// }else if (uppercaseCheck){
//   characters += uppercaseChar;

// }else if(numberCheck){
//   characters += numberChar;

// }else if (specialCheck){
//   characters += specialChar;

// }else{
//   characters === lowercaseChar;

// if (lowercaseCheck === false && uppercaseCheck === false && numberCheck === false && specialCheck === false) {
//   return "Please select at least one character type.";
  
// }

// for(var i = 0; i < passwordLength; i++){
//   password += characters.charAt(Math.floor(Math.random() * characters.length));
//   }
//   return password;
// }
// }

function generatePassword(){
  checkLength();
  console.log(passwordLength);
  checkLowercase();
  console.log(lowercaseCheck);
  checkUppercase();
  console.log(uppercaseCheck);
  checkNumbers();
  console.log(numberCheck);
  checkSpecial();
  console.log(specialCheck);

  var characters = lowercaseChar;
  var password = "";

  if (lowercaseCheck && uppercaseCheck && numberCheck && specialCheck){
    characters += lowercaseChar + uppercaseChar + numberChar + specialChar;

  }else if (lowercaseCheck && uppercaseCheck && numberCheck){
    characters += lowercaseChar + uppercaseChar + numberChar;

  }else if (lowercaseCheck && numberCheck && specialCheck){
    characters += lowercaseChar + numberChar + specialChar;

  }else if (lowercaseCheck && uppercaseCheck && specialCheck){
    characters += lowercaseChar + uppercaseChar + specialChar;

  }else if (uppercaseCheck && numberCheck && specialCheck){
    characters += uppercaseChar + numberChar + specialChar;

  }else if (lowercaseCheck && uppercaseCheck){
    characters += lowercaseChar + uppercaseChar;

  }else if (lowercaseCheck && numberCheck){
    characters += lowercaseChar + numberChar;

  }else if (lowercaseCheck && specialCheck){
    characters += lowercaseChar + specialChar;

  }else if (uppercaseCheck && numberCheck){
    characters += uppercaseChar + numberChar;

  }else if (uppercaseCheck && specialCheck){
    characters += uppercaseChar + specialChar;

  }else if (numberCheck && specialCheck){
    characters += numberChar + specialChar;

  }else if (lowercaseCheck){
    characters += lowercaseChar;

  }else if (uppercaseCheck){
    characters += uppercaseChar;

  }else if(numberCheck){
    characters += numberChar;

  }else if (specialCheck){
    characters += specialChar;
  }

  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  console.log(password);
  return password;
}


// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);


// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

