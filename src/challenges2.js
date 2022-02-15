function zerouOuNove(number) {
  for (let i = 0; i < number.length; i += 1) {
    if (number[i] < 0 || number[i] > 9) {
      return 'parou';
    }
  }
  return 'tudo ok';
}

function repetidos(number) {
  let resposta = 'tudo ok';
  let counter = 0;
  for (let i = 0; i < number.length; i += 1) {
    for (let i2 = 0; i2 < number.length; i2 += 1) {
      if (number[i] === number[i2]) {
        counter += 1;
      }
    } if (counter >= 3) {
      resposta = 'parou';
    } else counter = 0;
  }
  return resposta;
}

function parte1(number) {
  let bi = '';
  bi = bi.concat(number[0]);
  bi = bi.concat(number[1]);
  return bi;
}

function parte2(number) {
  let numberI = '';
  for (let i = 2; i < number.length - 4; i += 1) {
    numberI = numberI.concat(number[i]);
  }
  return numberI;
}

function parte3(number) {
  let numberU = '';
  for (let i = 7; i < number.length; i += 1) {
    numberU = numberU.concat(number[i]);
  }
  return numberU;
}

// Desafio 11
function generatePhoneNumber(number) {
  // seu código aqui
  if (number.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (zerouOuNove(number) === 'parou' || repetidos(number) === 'parou') {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  let telefone = `(${parte1(number)}) ${parte2(number)}-${parte3(number)}`;
  return telefone;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let resposta = false;
  if (lineA < (lineB + lineC) && lineB < (lineA + lineC) && lineC < (lineB + lineA)) {
    resposta = true;
  }
  return resposta;
}

// Desafio 13
function mensagem(num2) {
  let msg = '';
  if (num2 > 1) {
    msg = `${num2} copos de água`;
  } else msg = `${num2} copo de água`;
  return msg;
}

function hydrate(string) {
  let num2 = 0;
  let num;
  for (let i = 0; i < string.length; i += 1) {
    for (let i2 = 1; i2 <= 9; i2 += 1) {
      if (string[i] == i2) {
        num = string[i];
        num = parseInt(num, 10);
        num2 += num;
      }
    }
  }
  return mensagem(num2);
}

console.log(hydrate('1 cerveja'));

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
