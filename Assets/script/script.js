//User input variables

var enterLength;
var getNumber;
var getCharacter;
var getLowercase;
var getUppercase;
var Choices;



// Array for password variables

var numbers=[0,1,2,3,4,5,6,7,8,9];
var character=["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var alphaLower=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// For converting to Uppercase alphabet we will create a function

var nullUpper=[];

var toUpper= function(x){
  return x.toUpperCase();
};

// The output below will generate uppercase letter array

alphaUpper= alphaLower.map(toUpper);


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

// Function and Loop to generate password

function generatePassword (){

  // Ask user input for password length
  enterLength = prompt("How many characters would you like in your password ? Please choose between 8 to 128 characters ");
  

  if (!enterLength) {

    alert("Value is required !!!");
  
  }else if (enterLength < 8 || enterLength > 128){
     
    enterLength = prompt("You must choose between 8 to 128 Characters");

  } else {
    getNumber= confirm(" Will this contain numbers ?");
    getCharacter= confirm("Will this contain any special characters?");
    getLowercase= confirm("Will this contain lower case alphabets?");
    getUppercase= confirm("Will this contain upper case alphabets?")
  };

  // Conditions for user choices

  
  if (!getNumber && !getCharacter && !getLowercase && !getUppercase) {
    // If none of the 4 criteria selected
      Choices = alert("You must choose a criteria");
  
    
  } 
  // when 4 conditions are met

  else if (getNumber && getCharacter && getLowercase && getUppercase) {
    Choices = alphaLower.concat(alphaUpper, numbers, character);
    
  }
  // when 3 conditions are met

  else if (getNumber && getLowercase && getUppercase) {

    Choices = alphaLower.concat(alphaUpper, numbers);
    
  }
  else if ( getCharacter && getLowercase && getUppercase) {

    Choices = alphaLower.concat(alphaUpper, character);
    
  }
  else if (getNumber && getCharacter && getLowercase ) {

    Choices = alphaLower.concat(numbers, character);
    
  }
  else if (getNumber && getCharacter && getUppercase) {

    Choices = alphaUpper.concat(numbers, character);
    
  }
  // When 2 conditions are met

  else if ( getLowercase && getUppercase) {
    
    Choices = alphaLower.concat(alphaUpper);
    
  }
  else if (getNumber && getLowercase) {
    
    Choices = alphaLower.concat(numbers);
    
  }
  else if (getCharacter && getLowercase) {
    
    Choices = alphaLower.concat(character);
    
  }
  else if (getNumber && getUppercase) {
    
    Choices = alphaUpper.concat(numbers);
    
  }
  else if (getCharacter && getUppercase) {
    
    Choices = alphaUpper.concat(character);
    
  }
  else if (getNumber && getCharacter) {
    
    Choices = numbers.concat(character);
    
  }
  // when only 1 condition 

  else if (getLowercase) {
    
    Choices = alphaLower;
    
  }
  else if (getUppercase) {
    
    Choices = nullUpper.concat(alphaUpper);
    
  }
  else if (getNumber) {

    Choices = numbers;
    
  }
  else if (getCharacter) {
    
    Choices = character;
    
  };

 
  
// Empty variable for the password Length
var passwordBlank = [];
  
// To randomize the choices

for (var i = 0; i < enterLength; i++) {
  var selectedChoices = Choices[Math.floor(Math.random() * Choices.length)];
  passwordBlank.push(selectedChoices);
  
}

// Join strings and return complete password 

var password = passwordBlank.join("");

console.log("Password: " + password);

return password;

// Password Copy Function - Not Working

// TO-DO

// 1.Prompt to confirm after the password is generated if user wants to copy it or not
// 2.Make the copy function work

var copyPassword = window.confirm("Do You want to copy the password?");

if (copyPassword){

  function copy() {
    document.getElementById("password").select();
    document.execCommand("copy");
    alert("Your Password is copied to clipboard");
  }

}




};











