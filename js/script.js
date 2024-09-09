const passwordField = document.getElementById('password');
const generateBtn = document.getElementById('generateBtn');
const includeUppercase = document.getElementById('includeUppercase');
const includeLowercase = document.getElementById('includeLowercase');
const includeNumbers = document.getElementById('includeNumbers');
const includeSymbols = document.getElementById('includeSymbols');
const lengthSlider = document.getElementById('length');
const lengthValue = document.getElementById('lengthValue');

const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';

function generatePassword() {
    let availableChars = '';
    let password = '';
    
    if (includeUppercase.checked) availableChars += uppercaseChars;
    if (includeLowercase.checked) availableChars += lowercaseChars;
    if (includeNumbers.checked) availableChars += numberChars;
    if (includeSymbols.checked) availableChars += symbolChars;

    for (let i = 0; i < lengthSlider.value; i++) {
        const randomIndex = Math.floor(Math.random() * availableChars.length);
        password += availableChars[randomIndex];
    }

    passwordField.value = password;
}

generateBtn.addEventListener('click', generatePassword);
lengthSlider.addEventListener('input', () => {
    lengthValue.textContent = lengthSlider.value;
});
