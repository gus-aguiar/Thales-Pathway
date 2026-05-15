 // Desafio 1 - Thales
function compareTrue(a, b) {
  
  return a && b;
  
}
compareTrue(true, true);
compareTrue(true, false);
compareTrue(false, false);

// Desafio 2 - Thales
function calcArea(base, height) {
  
  return base * height / 2;
}
calcArea(10, 50);
calcArea(5, 2);
calcArea(51, 1);

// Desafio 3 - Thales
function splitSentence(frase) {

  return frase.split(' ');

}
splitSentence('hello world');

// Desafio 4 - Thales
function concatName(palavras) {
  
  return palavras[palavras.length - 1] + ", " + palavras[0]

}
concatName(['hello', 'world,', 'I', 'am', 'here', '.']);

// Desafio 5 - Thales
function footballPoints(vitoria, empate) {
 
  return vitoria * 3 + empate;

}

// Desafio 6 - Thales
function highestCount(count) {
  
  let index;
  let maiorNum = count[0];
  let contagem = 0;

  for(index = 0; index < count.length; index += 1){
    if(count[index] > maiorNum){

      maiorNum = count[index];
    }
  }

  for(index = 0; index < count.length; index += 1){
    if(count[index] === maiorNum)
      contagem += 1;
  }
  return contagem;
}

// Desafio 7 - Thales
function catAndMouse(rato, cat1, cat2) {
  
  let catA1 = Math.abs(cat1 - rato);
  let catA2 = Math.abs(cat2 - rato);

  if(catA1 > catA2){
    return 'cat2';
  }
  else if(catA2 > catA1){
    return 'cat1';
  }
  else if(catA1 === catA2){
    return 'os gatos trombam e o rato foge';''
  }
}

// Desafio 8 - Thales
function fizzBuzz(fB) {

  let resposta = [];

  for(index = 0; index < fB.length; index += 1){

  if(fB[index] % 3 === 0 && fB[index] % 5 === 0){
    resposta.push("fizzBuzz");
  }
  else if(fB[index] % 3 === 0){
    resposta.push("fizz");
  }
  else if(fB[index] % 5 === 0){
    resposta.push("buzz");
  }
  else {
    resposta.push("bug!");
  }
 }
 return resposta;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9 - Thales
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10 - Thales
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
