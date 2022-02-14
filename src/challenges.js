// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  return a > b && a > 10;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let multiplicacao = base * height;
  let divisao = multiplicacao / 2;
  return divisao;
}
// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let arrayR = [];
  let string2 = '';
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] !== ' ' && i !== string.length - 1) {
      string2 = string2.concat(string[i]);
    } else {
      arrayR.push(string2);
      string2 = '';
    }
  }
  arrayR[arrayR.length - 1] = arrayR[arrayR.length - 1].concat(string[string.length - 1]);

  return arrayR;
}

console.log(splitSentence('olá amigo'));

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
