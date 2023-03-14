// Assignment Code
var generateBtn = document.querySelector("#generate");

//Gets user input such as how many characters, upper or lowercase, numbers, and special characters to be used in the password. 
function promptUser() {
  var passwordLength = parseInt(prompt("How many characters do you want to use?"));
  var charNum = confirm("Do you want to use numbers?");
  var charLower = confirm("Do you want to use lowercase letters?");
  var charUpper = confirm("Do you want to use uppercase letters?");
  var charSpecial = confirm("Do you want to use special characters?");
  
  // if statements to determine what characters to use.
  // numbers
  if (charNum === false) {
    charNum = ""
  } else {
    charNum = "1234567890"
  }
  // lowercase letters
  if (charLower === false) {
    charLower = ""
  } else {
    charLower = "abcdefghijklmnopqrstuvwxyz"
  }
  // uppercase letters
  if (charUpper === false) {
    charUpper = ""
  } else {
    charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
  // special characters
  if (charSpecial === false) {
    charSpecial = ""
  } else {
    charSpecial = "!@#$%&"
  }

  //Console.log for testing purposes in the console
  console.log(passwordLength, charNum, charLower, charUpper, charSpecial);

  return [passwordLength, charNum, charLower, charUpper, charSpecial];
}



function generatePassword() {
// Store variables to be used in password generation based on user input.
  var userInputs = promptUser();
  var string = "";

  var chars = string.concat(userInputs[1], userInputs[2], userInputs[3], userInputs[4])
  //Console.log for testing purposes
  console.log(chars);
      
  var password = "";
    // For loop to repeat math function to print the correct amount of characters requested.
    for (var i = 0; i <= userInputs[0]; i++) {
    
      var randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber +1);
     }
      document.querySelector("#password").value = password;
      
  return password;

  }
  


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 
 
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
