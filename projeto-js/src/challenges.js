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
function highestCount() {
  // seu código aqui
}

// Desafio 7 - Thales
function catAndMouse() {
  // seu código aqui
}

// Desafio 8 - Thales
function fizzBuzz() {
  // seu código aqui
}

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
