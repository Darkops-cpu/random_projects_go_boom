const input = document.getElementById("input");
const button = document.getElementsByName("generate");
const lowercase = document.getElementById("lowercase");
const uppercase = document.getElementById("uppercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");

const Lowercase = 'abcdefghijklmnopqrstuvwxyz';
const Uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const Numbers = '0123456789';
const Symbols = '!@#$%^&*()_+';

let altpassword = '';
let password = '';

const lenght = input.lenght;
const hasLower = lowercase.checked;
const hasUpper = uppercase.checked;
const hasNumbers = numbers.checked;
const hasSymbols = symbols.checked;


button.onclick = function() {
    if(hasLower == true && hasUpper == true && hasNumbers == true && hasSymbols == true) {
        for(let i = 0; i < lenght; i++) {
            altpassword += Lowercase;
            altpassword += Uppercase;
            altpassword += Numbers;
            altpassword += Symbols;

            const random = Math.floor(Math.random() * altpassword.lenght + 1);

            password += altpassword[random];

        }
    }

    if(hasLower == true && hasUpper == true && hasNumbers == true && hasSymbols == false) {
        for(let i = 0; i < lenght; i++) {
            altpassword += Lowercase;
            altpassword += Uppercase;
            altpassword += Numbers;
            

            const random = Math.floor(Math.random() * altpassword.lenght + 1);

            password += altpassword[random];

        }
    }

    if(hasLower == true && hasUpper == true && hasNumbers == false && hasSymbols == true) {
        for(let i = 0; i < lenght; i++) {
            altpassword += Lowercase;
            altpassword += Uppercase;
            altpassword += Numbers;
            

            const random = Math.floor(Math.random() * altpassword.lenght + 1);

            password += altpassword[random];

        }
    }

    if(hasLower == true && hasUpper == false && hasNumbers == true && hasSymbols == true) {
        for(let i = 0; i < lenght; i++) {
            altpassword += Lowercase;
            altpassword += Uppercase;
            altpassword += Numbers;
            

            const random = Math.floor(Math.random() * altpassword.lenght + 1);

            password += altpassword[random];

        }
    }

    if(hasLower == false && hasUpper == true && hasNumbers == true && hasSymbols == true) {
        for(let i = 0; i < lenght; i++) {
            altpassword += Lowercase;
            altpassword += Uppercase;
            altpassword += Numbers;
            

            const random = Math.floor(Math.random() * altpassword.lenght + 1);

            password += altpassword[random];

        }
    }


    if(hasLower == true && hasUpper == true && hasNumbers == false && hasSymbols == false) {
        for(let i = 0; i < lenght; i++) {
            altpassword += Lowercase;
            altpassword += Uppercase;

            

            const random = Math.floor(Math.random() * altpassword.lenght + 1);

            password += altpassword[random];

        }
    }

    if(hasLower == true && hasUpper == false && hasNumbers == false && hasSymbols == false) {
        for(let i = 0; i < lenght; i++) {
            altpassword += Lowercase;
            

            

            const random = Math.floor(Math.random() * altpassword.lenght + 1);

            password += altpassword[random];

        }
    }

            altpassword += Uppercase;
        for(let i = 0; i < lenght; i++) {
            altpassword += Uowercase;
            

            

            const random = Math.floor(Math.random() * altpassword.lenght + 1);

            password += altpassword[random];

        }
    

    if(hasLower == false && hasUpper == false && hasNumbers == true && hasSymbols == false) {
        for(let i = 0; i < lenght; i++) {
            altpassword += Numbers;
            

            

            const random = Math.floor(Math.random() * altpassword.lenght + 1);

            password += altpassword[random];

        }
    }

    if(hasLower == false && hasUpper == false && hasNumbers == false && hasSymbols == true) {
        for(let i = 0; i < lenght; i++) {
            altpassword += Symbols;
            const random = Math.floor(Math.random() * altpassword.lenght + 1);

            password += altpassword[random];

        }
    }

    if(hasLower == false && hasUpper == false && hasNumbers == false && hasSymbols == false) {
        password = "select a checkbox";
    }

    return password;


}

const output = document.getElementById("display");

output.textContent = "your password is ${password";