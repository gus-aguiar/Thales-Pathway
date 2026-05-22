// Desafio 11 - Thales
function generatePhoneNumber(telefone) {

  let quant = {};

  for(let index = 0; index < telefone.length; index += 1){

    let numero = telefone[index];

    if(quant[numero]){
      quant[numero] += 1;
    }
    else{
      quant[numero] = 1;
    }
  }
  //console.log(quant);

  let repeticao = [];

  repeticao = (Object.values(quant));

  let maior = Math.max(...repeticao);

  //console.log(maior);

  if(telefone.length != 11){
    return "Array com tamanho incorreto.";
  }
  else if(Math.max(maior) > 2){
      return "não é possível gerar um número de telefone com esses valores";
    }
  else{
  for(let index = 0; index < telefone.length; index += 1){
    if(telefone[index] < 0){
      return "não é possível gerar um número de telefone com esses valores";
    }
    else if(telefone[index] > 9){
      return "não é possível gerar um número de telefone com esses valores";
    }
    }
    }

    let numTel = "(" + telefone[0] + telefone[1] + ") " +telefone[2] + telefone[3] +
    telefone[4] + telefone[5] + telefone[6] +
    "-" + telefone[7] + telefone[8] + telefone[9] + telefone[10];

    //console.log(numTel);
    
    return numTel;
  }
generatePhoneNumber([3, 1, 9, 8, 3, 3, 5, 2, 2, 9, 3]);

// Desafio 12 - Thales
function triangleCheck() {
  // seu código aqui
}

// Desafio 13 - Thales
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
