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

// Desafio 8
function bugFiller(carray) {
  let arrayFb = [];
  for (let cindex = 0; cindex < carray.length; cindex += 1) {
    if (carray[cindex] % 5 !== 0 && carray[cindex] % 3 !== 0) {
      arrayFb[cindex] = 'bug!';
    } else arrayFb[cindex] = carray[cindex];
  }
  return arrayFb;
}
function fizzBuzzFiller(carray) {
  let arrayFb = [];
  for (let cindex = 0; cindex < carray.length; cindex += 1) {
    if (carray[cindex] % 5 === 0 && carray[cindex] % 3 === 0) {
      arrayFb[cindex] = 'fizzBuzz';
    } else arrayFb[cindex] = carray[cindex];
  }
  return arrayFb;
}
function fizzFiller(carray) {
  let arrayFb = [];
  for (let cindex = 0; cindex < carray.length; cindex += 1) {
    if (carray[cindex] % 5 !== 0 && carray[cindex] % 3 === 0) {
      arrayFb[cindex] = 'fizz';
    } else arrayFb[cindex] = carray[cindex];
  }
  return arrayFb;
}
function buzzFiller(carray) {
  let arrayFb = [];
  for (let cindex = 0; cindex < carray.length; cindex += 1) {
    if (carray[cindex] % 5 === 0 && carray[cindex] % 3 !== 0) {
      arrayFb[cindex] = 'buzz';
    } else arrayFb[cindex] = carray[cindex];
  }
  return arrayFb;
}
function fizzBuzz(carray) {
  // seu código aqui
  let bf1 = bugFiller(carray);
  let bf2 = fizzBuzzFiller(bf1);
  let bf3 = fizzFiller(bf2);
  let bf4 = buzzFiller(bf3);
  return bf4;
}

// Desafio 9
function encode(word) {
  // seu código aqui
  word = word.replace(/a/g, '1');
  word = word.replace(/e/g, '2');
  word = word.replace(/i/g, '3');
  word = word.replace(/o/g, '4');
  word = word.replace(/u/g, '5');
  return word;
}

function decode(word) {
  // seu código aqui
  word = word.replace(/1/g, 'a');
  word = word.replace(/2/g, 'e');
  word = word.replace(/3/g, 'i');
  word = word.replace(/4/g, 'o');
  word = word.replace(/5/g, 'u');
  return word;
}

// Desafio 10
function techList(tech, name) {
  // seu código aqui
  let techOrdenado = tech.sort();
  let arrayLista = [];
  let name1 = name;
  let objeto;
  if (tech.length !== 0) {
    for (let index = 0; index < tech.length; index += 1) {
      objeto = {
        tech: techOrdenado[index],
        name: name1,
      };
      arrayLista[index] = objeto;
    }
  } else return 'Vazio!';
  return arrayLista;
}
let ar = ['React', 'Jest', 'HTML', 'CSS', 'JavaScript'];
console.log(techList(ar, 'Lucas'));

// let coisa;
// coisa.a = 'olá';
// console.log(coisa);

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
