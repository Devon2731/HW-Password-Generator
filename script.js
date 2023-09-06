// User input variables: 
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
// Password variable values: 

character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// Numeric characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Alphabetical characters
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Space is for the Uppercase conversion
space = [];

var choices;

var toUpper = function (x) {
    return x.toUpperCase();
};

alpha2 = alpha.map(toUpper);

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    newps = generatePassword();
    document.getElementById("password").placeholder = newps;
});