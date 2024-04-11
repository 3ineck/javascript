//Função do Hello World
function helloWorld() {
  alert("Hello World");
}

//Função de Soma
function somar(a = 0, b = 0) {
  a = parseFloat(document.getElementById("numero1").value); //Pega o número um e transforma em float
  b = parseFloat(document.getElementById("numero2").value); //Pega o número dois e transforma em float
  c = a + b; //Soma

  document.getElementById("resultado").value = c; //Mostra o resultado
}

//Array com todas cores de spinners
const spinners = [
  "text-primary",
  "text-secondary",
  "text-success",
  "text-danger",
  "text-warning",
  "text-info",
  "text-light",
  "text-light",
];

//Função para pegar por ID e trocar propriedade
function trocaId() {
  //Pega um número de 0 a 7 (para depois pegar uma cor aleatória da array spinners)
  let numero = Math.floor(Math.random() * 10);

  //Remove todas as classes
  document.getElementById("spinnerID").className = "";

  //Adiciona as classes novamente
  document
    .getElementById("spinnerID")
    .classList.add("spinner-border", spinners[numero]);
}

//Função para pegar por Name e trocar propriedade
function trocaName() {
  //Pega um número de 0 a 7 (para depois pegar uma cor aleatória da array spinners)
  let numero = Math.floor(Math.random() * 10);

  //Remove todas as classes
  document.getElementsByName("spinnerName")[0].className = "";

  //Adiciona as classes novamente
  document
    .getElementsByName("spinnerName")[0]
    .classList.add("spinner-border", spinners[numero]);
}

//Função para pegar por Name e trocar propriedade
function trocaClass() {
  //Disclaimer
  /*
Como eu tinha feito removendo todas as classes, se eu localizasse o elemento pela classe,
removesse todas as classes e tentasse achar de novo pela classe, não iria localizar.
Então eu fiz um  jeito que funcionasse. Sei que existe formas mais fáceis, mas quis me desafiar a tentar a seguir
meu método (:
*/

  //Pega um número de 0 a 7 (para depois pegar uma cor aleatória da array spinners)
  let numero = Math.floor(Math.random() * 10);

  //Caso haja uma das classes que estão na array, é removido
  for (let i = 0; i < spinners.length; i++) {
    document
      .getElementsByClassName("classSelect")[0]
      .classList.remove(spinners[i]);
  }

  //Adiciona uma das classes de cor
  document
    .getElementsByClassName("classSelect")[0]
    .classList.add("spinner-border", spinners[numero]);
}
