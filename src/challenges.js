// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  return a && b;
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

// Desafio 4
function concatName(arrayLista) {
  // seu código aqui
  let stringR = '';
  stringR = stringR.concat(arrayLista[arrayLista.length - 1]);
  stringR = stringR.concat(', ');
  stringR = stringR.concat(arrayLista[0]);
  return stringR;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let wPoints = wins * 3;
  let points = wPoints + ties;
  return points;
}

// Desafio 6
function maiorFinder(barray) {
  let maior = barray[0];
  for (let bindex = 0; bindex < barray.length; bindex += 1) {
    if (barray[bindex] >= barray[bindex + 1] && barray[bindex] >= maior) {
      maior = barray[bindex];
    } else if (barray[bindex + 1] > maior) {
      maior = barray[bindex + 1];
    }
  }
  return maior;
}

function highestCount(barray) {
  // seu código aqui{
  let counter = 0;
  let maior = maiorFinder(barray);
  for (let bindex = 0; bindex < barray.length; bindex += 1) {
    if (maior === barray[bindex]) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7

function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let resposta;
  if (Math.abs(mouse - cat1) === Math.abs(mouse - cat2)) {
    resposta = 'os gatos trombam e o rato foge';
  } else if (Math.abs(mouse - cat1) > Math.abs(mouse - cat2)) {
    resposta = 'cat2';
  } else if (Math.abs(mouse - cat2) > Math.abs(mouse - cat1)) {
    resposta = 'cat1';
  }
  return resposta;
}

// console.log(catAndMouse(3, 1, 2));

// //cat2
// console.log(catAndMouse(0, 3, 2));

// // gatos trombam
// console.log(catAndMouse(3, 1, 2));

// //cat1
// console.log(catAndMouse(10, 4, 22));

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
