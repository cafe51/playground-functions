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
  let stringR = '';.
  stringR = stringR.concat(arrayLista[arrayLista.length - 1]);
  stringR = stringR.concat(', ');
  stringR = stringR.concat(arrayLista[0]);
  return stringR;
}
let exemplo = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];

console.log(concatName(exemplo));

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let wPoints = wins * 3;
  let points = wPoints + ties;
  return points;
}

// Desafio 6

function highestCount(barray) {
  // seu código aqui{
      for (let bindex2 = 1; bindex2 < barray.length; bindex2 += 1) {
        for (let secondbIndex = 0; secondbIndex < bindex2; secondbIndex += 1) {
          if (barray[bindex2] > barray[secondbIndex]) {
            let position = barray[bindex2];
            barray[bindex2] = barray[secondbIndex];
            barray[secondbIndex] = position;
      }
    }
  }
  let arrayContador = [];
  let counterrr = 0;
  arrayContador.length = barray.length;
  for (let indx = 0; indx < barray.length; indx += 1) {
    for (let indx2 = 0; indx2 < barray.length; indx2 += 1) {
      if (barray[indx] === barray[indx2]) {
        counterrr += 1;
      }
    }
    arrayContador[indx] = counterrr;
    counterrr = 0;
  }
  return arrayContador[0];
}

let x = [0, 4, 4, 4, 9, 2, 1];

console.log(highestCount(x));



// let arrayContador = [];
// let counterrr = 0;
// arrayContador.length = barray.length;
// for (let indx = 0; indx < barray.length; indx += 1) {
//   for (let indx2 = 0; indx2 < barray.length; indx2 += 1) {
//     if (barray[indx] === barray[indx2]) {
//       counterrr += 1;
//     }
//   }
//   arrayContador[indx] = counterrr;
//   counterrr = 0;
// }
// return arrayContador[0];


// function bobblersort(barray) {
//   for (let bindex2 = 1; bindex2 < barray.length; bindex2 += 1) {
//     for (let secondbIndex = 0; secondbIndex < bindex2; secondbIndex += 1) {
//       if (barray[bindex2] > barray[secondbIndex]) {
//         let position = barray[bindex2];
//         barray[bindex2] = barray[secondbIndex];
//         barray[secondbIndex] = position;
//       }
//     }
//   }
//   return barray;
// }







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
