console.log("** Concatenação de variavéis **");

let nome = "Sidney Muriano"
let idade = 39
console.log(nome);
console.log(nome.toUpperCase());
console.log(nome.toLowerCase());
console.log(idade);

console.log("** Array **");
let frutasArray = ["maça", "pêra", "laranja"];
console.log(frutasArray);
console.log(frutasArray[1]);
console.log(frutasArray.toString());
console.log(frutasArray.join(" | "));
console.log(frutasArray.length);

console.log("** Adicionando item ao Array **");
frutasArray.push("uva");
console.log(frutasArray.join(" | "));

console.log("** Removendo item adicionado ao Array **");
frutasArray.pop();
console.log(frutasArray.join(" | "));

console.log("** Exibindo os dados do Array de forma invertida **");
frutasArray.reverse();
console.log(frutasArray.join(" | "));

console.log("** Dicionário **");
let frutasDic = [{
    nome: "maça",
    cor: "vermelha"
  },
  {
    nome: "pêra",
    cor: "amarela"
  },
  {
    nome: "laranja",
    cor: "laranja"
  }
];
console.log(frutasDic);
console.log(frutasDic[1]);
console.log(frutasDic[1].nome);
console.log(frutasDic[1].cor);

console.log("** Exibir uma pergunta **");
//let idadePrompt = prompt("Qual a sua idade?", "39");
let idadePrompt = 39;
if (idadePrompt >= 18) {
  console.log("Você é maior de idade");
} else {
  console.log("Você é menor de idade");
}

console.log("** Laço de repetição com While **");
let countWhile = 0;
while (countWhile <= 5) {
  console.log(countWhile);
  countWhile++;
}

console.log("** Laço de repetição com For **");
let countFor;
for (countFor = 0; countFor <= 5; countFor++) {
  console.log(countFor);
}

console.log("** Trabalhando com data **");
let data = new Date();
console.log(data);
console.log(data.getDate());
//console.log(data.getDay()); dia da semana
console.log(data.getMonth() + 1);
console.log(data.getFullYear());
console.log(data.getHours());
console.log(data.getMinutes());
console.log(data.getMilliseconds());

console.log("** Funções **");

function soma(n1, n2) {
  return n1 + n2;
}
console.log(soma(45, 34));

function setReplace(frase, textoOriginal, textoSubtituto) {
  return frase.replace(textoOriginal, textoSubtituto);
}
console.log(setReplace("O Japão é 5 vezes campeão do mundo", "Japão", "Brasil")); //Case sensitive

console.log("** Funções chamada na página **");

function cliqueBotao() {
  console.log("Clicou no botão da tela");
}

function cliqueBotaoAgradecer() {
  document.getElementById("obrigado").innerHTML = "Obrigado por clicar";
  console.log(document.getElementById("obrigado"));
}

function cliqueAbrirSite() {
  window.open("https://www.globo.com");
  console.log("Abriu o site da Globo.com em uma nova aba");
  window.location.href = "https://www.globo.com";
  console.log("Abriu o site da Globo.com na própria aba");
}

function getHoursDate(date) {
  return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "." + date.getMilliseconds();
}

function trocarTexto(element) {
  element.innerHTML = "Já passou o mouse por aqui";
  let data = new Date();
  console.log(getHoursDate(data) + ": Passou o mouse em cima");
}

function voltarTexto(element) {
  element.innerHTML = "Passe o mouse aqui";
  let data = new Date();
  console.log(getHoursDate(data) + ": Retirou o mouse de cima");
}

function load() {
  console.log("Carregou a página");
}

function change(element) {
  console.log(element.value);
}