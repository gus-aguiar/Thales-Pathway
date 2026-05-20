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


// Desafio 9 - Thales
function encode(frase) {

  let novaFrase = "";

  for (let index = 0; index < frase.length; index += 1){

    if(frase[index] === "a"){
      novaFrase += "1";
    }
    else if(frase[index] === "e"){
      novaFrase += "2";
    }
    else if(frase[index] === "i"){
      novaFrase += "3";
    }
    else if(frase[index] === "o"){
      novaFrase += "4";
    }
    else if(frase[index] === "u"){
      novaFrase += "5";
    }
    else{
      novaFrase += frase[index];
  }
  }
    console.log(novaFrase);
    return novaFrase;
}
//encode("hello world");

function decode(frase) {

  let novaFrase = "";

  for (let index = 0; index < frase.length; index += 1){

    if(frase[index] === "1"){
      novaFrase += "a";
    }
    else if(frase[index] === "2"){
      novaFrase += "e";
    }
    else if(frase[index] === "3"){
      novaFrase += "i";
    }
    else if(frase[index] === "4"){
      novaFrase += "o";
    }
    else if(frase[index] === "5"){
      novaFrase += "u";
    }
    else{
      novaFrase += frase[index];
  }
  }
    //console.log(novaFrase);
    return novaFrase;
}
//decode("h2ll4 w4rld");

// Desafio 10 - Thales
function techList(tech, nome) {

  let lista = [];
  tech.sort();
  
  if(tech.length > 0){
  for (let index = 0; index < tech.length; index += 1){
    lista.push( {
                  name: nome,
                  tech: tech[index]
    });
  }
  return lista;
}
  else if(tech.length === 0){
    return "Vazio!";
  }

  
  
}
techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')

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
