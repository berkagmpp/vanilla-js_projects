const randomFunc = {
  lower: getRamdomLower,
  upper: getRamdomUpper,
  number: getRamdomNumber,
  symbol: getRamdomSymbol,
};

function generatePassword(lower, upper, number, symbol, length) {
  let generatePassword = '';
  const typesCount = lower + upper + number + symbol; // 4
  const typeArr = [{ lower }, { upper }, { number }, { symbol }];
}

function getRamdomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
  // fromCharCode() make
}

function getRamdomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
}

function getRamdomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
}

function getRamdomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
}
