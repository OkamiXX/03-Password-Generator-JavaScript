// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLength;
var checkLower;
var checkUpper;
var checkNumber;
var checkSpecial;
var userResponse;

//this one is for the length of the password and password at the end [array]
var finalPass;
var finalResponse = [];
var  contrasena = [];

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Var To Upper Case ------------
var upperCase = lowerCase.map(z => {return z.toUpperCase();})
//--------------------------------------
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", "@"," ? ", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    //resets the value of password so they dont mix together if done multiple times
    passwordText.value = 0;
    passwordText.value = finalPass;
  
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Start Function
function generatePassword() {
  // Ask four user Input
  passwordLength = prompt("How many characters would you like your password? Choose between 8 and 128");
  console.log("Password length: " + passwordLength);
  

    // If no input by the user, an alert will be displayed saying that a value is required.
    // tried to use a while loop but i did not get it to work, because the prompts got spammed infinitely
    // and it was bugged out.
  if(!passwordLength) {
    alert("NO INPUT! VALUE REQUIRED!");
    

    //if the lenght is above or below then it needs to be entered again.
    } else if (passwordLength < 8 || passwordLength > 128) {
        passwordLength = prompt("Please choose between 8 and 128");
        console.log("Password length: " + passwordLength);

        checkLower = confirm("Will you like to have lower case letters?");
        //to say if it is true or false on the console log.
        console.log("Lower case char: " + checkLower);
        checkUpper = confirm("Will you like to have upper case letters?");
        //to say if it is true or false on the console log.
        console.log("Upper case char: " + checkUpper);
        checkNumber = confirm("Will you like to have numbers?");
        //to say if it is true or false on the console log.
        console.log("Number: " + checkNumber);
        checkSpecial = confirm("Will you like to have special characters?");
        //to say if it is true or false on the console log.
        console.log("Special Character: " + checkSpecial);
    
    } else { 
        checkLower = confirm("Will you like to have lower case letters?");
        //to say if it is true or false on the console log.
        console.log("Lower case char: " + checkLower);
        checkUpper = confirm("Will you like to have upper case letters?");
        //to say if it is true or false on the console log.
        console.log("Upper case char: " + checkUpper);
        checkNumber = confirm("Will you like to have numbers?");
        //to say if it is true or false on the console log.
        console.log("Number: " + checkNumber);
        checkSpecial = confirm("Will you like to have special characters?");
        //to say if it is true or false on the console log.
        console.log("Special Character: " + checkSpecial);

    };


    // for all of this im using if, and else if elements to verify what the user
    //chose and then concatenate all the elements in an array put together.
    // If NO in all.
  if (!checkLower && !checkUpper && !checkNumber && !checkSpecial) {
    userResponse = alert("You must choose a criteria");

    // If YES in all.
    } else if (checkLower && checkUpper && checkNumber && checkSpecial) {
        userResponse = lowerCase.concat(upperCase, numbers, special);
        console.log(userResponse);
    }

     // If only 1 YES (in any of them).
    else if (checkLower) {
        userResponse = lowerCase;
        console.log(userResponse);
    }
    else if (checkUpper) {
        userResponse = blankUpper.concat(upperCase);
        console.log(userResponse);
    }
    else if (checkNumber) {
        userResponse = numbers;
        console.log(userResponse);
    }
    else if (checkSpecial) {
        userChoices = special;
        console.log(userResponse);
    }

     // If YES in 2 of them (ANY).
     else if (checkLower && checkUpper) {
        userResponse = lowerCase.concat(upperCase);
        console.log(userResponse);
    }
    else if (checkLower && checkNumber) {
        userResponse = lowerCase.concat(numbers);
        console.log(userResponse);
    }
    else if (checkLower && checkSpecial) {
        userResponse = lowerCase.concat(special);
        console.log(userResponse);
    }
    else if (checkNumber && checkSpecial) {
        userResponse = numbers.concat(special);
        console.log(userResponse);
    }
    else if (checkUpper && checkNumber) {
        userResponse = upperCase.concat(numbers);
        console.log(userResponse);
    }
    else if (checkUpper && checkSpecial) {
        userResponse = upperCase.concat(special);
        console.log(userResponse);
    }
    

    // If YES in 3 of them (ANY).
    else if (checkLower && checkUpper && checkNumber) {
        userResponse = lowerCase.concat(upperCase, numbers);
        console.log(userResponse);
    }

    else if (checkLower && checkUpper && checkSpecial) {
        userResponse = lowerCase.concat(upperCase, special);
        console.log(userResponse);
    }

    else if (checkLower && checkNumber && checkSpecial) {
        userResponse = lowerCase.concat(numbers, special);
        console.log(userResponse);
    }

    else if (checkUpper && checkNumber && checkSpecial) {
        userResponse = upperCase.concat(numbers, special);
        console.log(userResponse);
    };

    //For loop to insert random char/integers inside of the final response and create the password.
    for (var i = 0; i < passwordLength; i++){
        finalResponse = userResponse[Math.floor(Math.random() * userResponse.length)];
        contrasena.push(finalResponse);
        console.log(finalResponse);
    }
 
    //returns the final password to be displayed .
    finalPass = contrasena.join("");
    console.log("Your new Password is: " + finalPass);
    alert("NEW PASSWORD: " + finalPass);
    return finalPass;

}
