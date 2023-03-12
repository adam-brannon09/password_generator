// Assignment Code
var generateBtn = document.querySelector("#generate");

//Gets user input such as how many characters, upper or lowercase, numbers, and special characters to be used in the password. 
function promptUser() {
  var passwordLength = parseInt(prompt("How many characters do you want to use?"));
  var charNum = confirm("Do you want to use numbers? Y/N");
  var charLower = confirm("Do you want to use lowercase letters? Y/N");
  var charUpper = confirm("Do you want to use uppercase letters?Y/N");
  var charSpecial = confirm("Do you want to use special characters? Y/N")
  //console log to test and verify user input was correct
  console.log(passwordLength, charNum, charLower, charUpper, charSpecial);

  return [passwordLength, charNum, charLower, charUpper, charSpecial];
}



function generatePassword() {

  var userInputs = promptUser()
  
  //Testing Area **if statements for chars**
  // if (charNum === true) {
  //   charNum = "1234567890";
  // }

  // if (userInputs[2] === true) {
  //   userInputs[2] = "abcdefghijklmnopqrstuvwxyz";
  // }

  // if (userInputs[3] === true) {
  //   userInputs[3] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // }

  // if (userInputs[4] === true) {
  //   userInputs[4] = "!@#$%";
  // }
  
  // var totalInputs = userInputs[1, 2, 3, 4,]''
  



  //Testing area

    var chars = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%"
  
    var password =""
  
    for (var i = 0; i <= userInputs[0]; i++) {
    
      var randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber +1);
     }
      document.querySelector("#password").value = password;
      
      return password

  }
  


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 
 
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
