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

const length = input.value.length;
const hasLower = lowercase.checked;
const hasUpper = uppercase.checked;
const hasNumbers = numbers.checked;
const hasSymbols = symbols.checked;

const output = document.getElementById("display");


button.onclick = function() {
    altpassword = '';
    password = '';

    if (hasLower) altpassword += Lowercase;
    if (hasUpper) altpassword += Uppercase;
    if (hasNumbers) altpassword += Numbers;
    if (hasSymbols) altpassword += Symbols;

    if (altpassword.length === 0) {
        password = "select a checkbox";
    } else {
        for (let i = 0; i < length; i++) {
            const random = Math.floor(Math.random() * altpassword.length);
            password += altpassword[random];
        }
    }

    output.textContent = 'your password is ' + password;
};