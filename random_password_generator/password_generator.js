let input = document.getElementById("length");
let output = document.getElementById("password");


const lowercase = document.getElementById("lowercase");
const uppercase = document.getElementById("uppercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");

const button = document.getElementById("generate");

const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+";

button.onclick = function() {
    let altpassword = "";
    let password = "";

    let valchang = input.value;
    let valchang1 = Number(valchang);

    if(lowercase.checked === true && uppercase.checked === true && numbers.checked === true && symbols.checked === true) {
        altpassword += lowercaseChars + uppercaseChars + numberChars + symbolChars;
    }
    
    else if(uppercase.checked === true && numbers.checked === true && symbols.checked === true) {
        altpassword += uppercaseChars + numberChars + symbolChars;
    }
    
    else if(lowercase.checked === true && numbers.checked === true && symbols.checked === true) {
        altpassword += lowercaseChars + numberChars + symbolChars;
    }
    
    else if(lowercase.checked === true && uppercase.checked === true && symbols.checked === true) {
        altpassword += lowercaseChars + uppercaseChars + symbolChars;
    }
    
    else if(lowercase.checked === true && uppercase.checked === true && numbers.checked === true) {
        altpassword += lowercaseChars + uppercaseChars + numberChars;
    }
    
    else if(numbers.checked === true && symbols.checked === true) {
        altpassword += numberChars + symbolChars;
    }
    
    else if(uppercase.checked === true && symbols.checked === true) {
        altpassword += uppercaseChars + symbolChars;
    }
    
    else if(uppercase.checked === true && numbers.checked === true) {
        altpassword += uppercaseChars + numberChars;
    }
    
    else if(lowercase.checked === true && symbols.checked === true) {
        altpassword += lowercaseChars + symbolChars;
    }
    
    else if(lowercase.checked === true && numbers.checked === true) {
        altpassword += lowercaseChars + numberChars;
    }
    
    else if(lowercase.checked === true && uppercase.checked === true) {
        altpassword += lowercaseChars + uppercaseChars;
    }
    
    else if(symbols.checked === true) {
        altpassword += symbolChars;
    }
    
    else if(numbers.checked === true) {
        altpassword += numberChars;
    }
    
    else if(uppercase.checked === true) {
        altpassword += uppercaseChars;
    }
    
    else if(lowercase.checked === true) {
        altpassword += lowercaseChars;
    }
    else (lowercase.checked === false && uppercase.checked === false && numbers.checked === false && symbols.checked === false)
    {
        window.alert("Please select at least one character type");
    }
    

    for(let i = 0; i < valchang1; i++) {
        password += altpassword.charAt(Math.floor(Math.random() * altpassword.length));
    }

    output.textContent = password;


}
