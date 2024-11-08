const resultEl = document.getElementById('result');
const lenghEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

const randomFunc = {
  lower: getRamdomLower,
  upper: getRamdomUpper,
  number: getRamdomNumber,
  symbol: getRamdomSymbol,
};

generateEl.addEventListener('click', () => {
  const length = +lenghEl.value;
  const hasLower = lowercaseEl.checked; // true or false
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;
  resultEl.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
  );
});

function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = '';
  const typesCount = lower + upper + number + symbol; // 4
  const typeArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
    // console.log(typeArr);
    // -> only show checked item by filter()
  );

  if (typesCount === 0) {
    return '';
  }

  for (let i = 0; i < length; i += typesCount) {
    typeArr.forEach((type) => {
      //   console.log(type);
      // -> ...{lower: false}, {number: true}, ...
      const funcName = Object.keys(type)[0];
      //   console.log(funcName);
      // -> ... symbol, number ...
      generatedPassword += randomFunc[funcName]();
      // each type of character is added to the generatedPassword using randomFunc
    });
  }

  const finalPassword = generatedPassword.slice(0, length);
  // slice() is used to cut the generatedPassword to the length

  return finalPassword;
}

function getRamdomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
  // fromCharCode() makes lower case letter from 97 to 122 in ASCII
}

function getRamdomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
  // upper case letter from 65 to 90 in ASCII
}

function getRamdomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
  // number from 48 to 57 in ASCII
}

function getRamdomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}
