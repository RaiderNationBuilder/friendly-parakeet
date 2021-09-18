// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
//----------------------------------------------------------------------




// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

//" !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
// Assignment code here
function generatePassword() {
    // WHEN prompted for the length of the password
    // THEN I choose a length of at least 8 characters and no more than 128 characters 
    password = "";
    function passwordLength() {
      var length = window.prompt("Choose a length of password between 8 and 128 characters");
          while (length < 8 || length > 128) {
            length = window.prompt("Choose a length of password between 8 and 128 characters");
          };
          var confirm = window.confirm("You chose a password length of " + length + " characters correct?");
          if (!confirm) {
            passwordLength();      
          }
          return length;      
    }
    
    var psswrdLength = passwordLength();  
  
    // WHEN asked for character types to include in the password
    // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters  
    // WHEN I answer each prompt
    // THEN my input should be validated and at least one character type should be selected
    function charTypes() {
      var special = "! \"\#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
      var numbers = "0123456789";
      var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var charPool = ""    
      
      function lowerCase(){
        var lowerConfirm = false;
        while (!lowerConfirm) { 
          lowerConfirm = window.confirm("Would you like your password to contain lowercase letters?");           
          if (lowerConfirm) {
            var lowerConfim2 = window.confirm("Are you sure you WANT to include lowercase letters in your password?");  
            if (lowerConfim2) {                  
              return letters.toLowerCase();
            } else {
              lowerCase();
            }
          } else {
            var lowerCancel = window.confirm("Are you sure you DONT WANT to include lowercase letters in your password?");
            if (lowerCancel) {
              return "";
            }           
          }            
        }      
      }
  
      function upperCase(){
        var upperConfirm = false;
        while (!upperConfirm) { 
          upperConfirm = window.confirm("Would you like your password to contain uppercase letters?");           
          if (upperConfirm) {
            var upperConfim2 = window.confirm("Are you sure you WANT to include uppercase letters in your password?");  
            if (upperConfim2) {                  
              return letters;
            } else {            
              upperCase();
            }
          } else {
            var upperCancel = window.confirm("Are you sure you DONT WANT to include uppercase letters in your password?");
            if (upperCancel) {
              return "";
            }           
          }            
        }      
      }
  
      function number(){
        var numberConfirm = false;
        while (!numberConfirm) { 
          numberConfirm = window.confirm("Would you like your password to contain numbers?");           
          if (numberConfirm) {
            var numberConfim2 = window.confirm("Are you sure you WANT to include numbers in your password?");  
            if (numberConfim2) {                  
              return numbers;
            } else {            
              number();
            }
          } else {
            var numberCancel = window.confirm("Are you sure you DONT WANT to include numbers in your password?");
            if (numberCancel) {
              return "";
            }           
          }            
        }      
      }
  
      function symbol(){
        var symbolConfirm = false;
        while (!symbolConfirm) { 
          symbolConfirm = window.confirm("Would you like your password to contain symbols?");           
          if (symbolConfirm) {
            var symbolConfim2 = window.confirm("Are you sure you WANT to include symbols in your password?");  
            if (symbolConfim2) {                  
              return special;
            } else {            
              symbol();
            }
          } else {
            var symbolCancel = window.confirm("Are you sure you DONT WANT to include symbols in your password?");
            if (symbolCancel) {
              return "";
            }           
          }            
        }      
      }
      // WHEN I answer each prompt
      // THEN my input should be validated and at least one character type should be selected
      while (charPool === "") {
        charPool = lowerCase();
        charPool = charPool + upperCase();
        charPool = charPool + number();
        charPool = charPool + symbol();
  
        if (charPool === ""){
          window.alert("You must chose at least one type of character to proceed")
        }        
      }
    return charPool
    }
    var charString = charTypes();  
  
    // ***************************************************************************************/
    // *    Title: Random Password Generator with JavaScript
    // *    Author: Foolish Developer
    // *    Date: July 28, 2021.
    // *    Code version: 1.0
    // *    Availability: https://www.foolishdeveloper.com/2021/07/random-password-generator-javascript.html
    // *
    // ***************************************************************************************
    for (var i = 0; i < psswrdLength; i++) {
      var generatedPassword = Math.floor(Math.random() * charString.length);
      password += charString.substring(generatedPassword, generatedPassword +1);    
    }
    console.log(password);
    return password;
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
  