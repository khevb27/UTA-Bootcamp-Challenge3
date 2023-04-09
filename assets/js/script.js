const generateBtn = document.querySelector("#generate");

const lowercaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const uppercaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numberChar = ["1","2", "3", "4", "5", "6", "7", "8", "9", "0"];
const specialChar = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "{", "}", "[", "]", ":", ";", ".", "?", ">", "<", "/"];

let passwordLength;
let lowercaseCheck;
let uppercaseCheck;
let numberCheck;
let specialCheck;

function checkLength() {
  passwordLength = prompt("Welcome! Let's generate a secure password for you. \nHow many characters would you like in your password? \n(Note: please choose a number between 8-128)");

  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Password length must be a number between 8-128 characters");
    checkLength();
  } else {
    alert(`Your password will be ${passwordLength} characters long.`);
  }
  return passwordLength;
}

function checkLowercase() {
  lowercaseCheck = confirm("Do you want to include lowercase letters in your password? \n(Note: 'Cancel' = No | 'OK' = Yes)");

  if (lowercaseCheck) {
    alert("Your password will include lowercase characters.");
  } else {
    alert("Your password will NOT include lowercase characters.");
  }
  return lowercaseCheck;
}

function checkUppercase() {
  uppercaseCheck = confirm("Do you want to include uppercase letters in your password? \n(Note: 'Cancel' = No | 'OK' = Yes)");

  if (uppercaseCheck) {
    alert("Your password will include uppercase characters.");
  } else {
    alert("Your password will NOT include uppercase characters.");
  }
  return uppercaseCheck;
}

function checkNumbers() {
  numberCheck = confirm("Do you want to include numbers in your password? \n(Note: 'Cancel' = No | 'OK' = Yes)");

  if (numberCheck) {
    alert("Your password will include numeric characters.");
  } else {
    alert("Your password will NOT include numeric characters.");
  }
  return numberCheck;
}

function checkSpecial() {
  specialCheck = confirm("Do you want to include special characters in your password? \n(Note: 'Cancel' = No | 'OK' = Yes)");

  if (specialCheck) {
    alert("Your password will include special characters.");
  } else {
    alert("Your password will NOT include special characters.");
  }
  return specialCheck;
}

function generatePassword() {
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

  let password = "";
  let charSet = [];
  
  if (lowercaseCheck) {
  charSet = charSet.concat(lowercaseChar);
  }
  
  if (uppercaseCheck) {
  charSet = charSet.concat(uppercaseChar);
  }
  
  if (numberCheck) {
  charSet = charSet.concat(numberChar);
  }
  
  if (specialCheck) {
  charSet = charSet.concat(specialChar);
  }
  
  if (charSet.length === 0) {
  alert("Please select at least one character type for your password.");
  return;
  }
  
  for (let i = 0; i < passwordLength; i++) {
  const randomIndex = Math.floor(Math.random() * charSet.length);
  password += charSet[randomIndex];
  }
  
  const passwordText = document.querySelector("#password");
  passwordText.value = password;
  }
  
  generateBtn.addEventListener("click", generatePassword);