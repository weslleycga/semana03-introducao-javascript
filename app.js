"use strict";

// ===== BLOCO 1 – Fundamentos e Variáveis =====
console.log("===== BLOCO 1 =====");

// 1.1 let: pode ser reatribuída
let pontos = 0;
pontos += 10;
console.log("Pontos:", pontos);

// 1.2 const: não pode ser reatribuída
const MAX_PONTOS = 100;
try {
  MAX_PONTOS = 200;
} catch (erro) {
  console.log(`${erro.name}: ${erro.message}`);
  console.log("Motivo: const cria uma ligação imutável; o identificador não pode apontar para outro valor.");
}

// 1.3 Tipos primitivos e typeof
const texto = "JavaScript";
const numero = 42;
const verdadeiro = true;
let indefinido;
const nulo = null;
console.log("string:", typeof texto);
console.log("number:", typeof numero);
console.log("boolean:", typeof verdadeiro);
console.log("undefined:", typeof indefinido);
console.log("null:", typeof nulo, "(bug histórico: null é primitivo, mas typeof retorna 'object')");

// 1.4 Template literals vs concatenação
const nome = "Weslley";
const idade = 30;
const fraseTemplate = `Meu nome é ${nome} e tenho ${idade} anos.`;
const fraseConcatenada = "Meu nome é " + nome + " e tenho " + idade + " anos.";
console.log(fraseTemplate);
console.log(fraseConcatenada);
console.log("Frases iguais?", fraseTemplate === fraseConcatenada);

// ===== BLOCO 2 – Funções =====
console.log("\n===== BLOCO 2 =====");

// 2.1 Função declarada: sofre hoisting, pode ser chamada antes
console.log("Declarada (antes da declaração):", ehMaiorDeIdade(20));
function ehMaiorDeIdade(idade) {
  return idade >= 18;
}

// 2.2 Função de expressão: não pode ser chamada antes (const fica na "zona morta temporal")
try {
  console.log(ehMaiorDeIdadeExpressao(20));
} catch (erro) {
  console.log(`${erro.name}: ${erro.message}`);
}
const ehMaiorDeIdadeExpressao = function (idade) {
  return idade >= 18;
};
console.log("Expressão (depois da declaração):", ehMaiorDeIdadeExpressao(16));

// 2.3 dobro nas três formas
function dobroDeclarada(n) {
  return n * 2;
}
const dobroExpressao = function (n) {
  return n * 2;
};
const dobroArrow = (n) => n * 2;
console.log("dobro:", dobroDeclarada(4), dobroExpressao(4), dobroArrow(4));

// 2.4 Parâmetro com valor padrão
const dobroPadrao = (n = 1) => n * 2;
console.log("dobroPadrao() sem argumento:", dobroPadrao());
console.log("dobroPadrao(5):", dobroPadrao(5));

// ===== BLOCO 3 – Controle de Fluxo =====
console.log("\n===== BLOCO 3 =====");

// 3.1 if/else
function classificarNota(nota) {
  if (nota >= 6) {
    return "Aprovado";
  } else {
    return "Reprovado";
  }
}
console.log("Nota 7:", classificarNota(7));
console.log("Nota 4:", classificarNota(4));

// 3.2 switch
const corSemaforo = "amarelo";
switch (corSemaforo) {
  case "vermelho":
    console.log("Pare");
    break;
  case "amarelo":
    console.log("Atenção");
    break;
  case "verde":
    console.log("Siga");
    break;
  default:
    console.log("Cor inválida");
}

// 3.3 Tabuada do 5 com for
console.log("Tabuada do 5:");
for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

// 3.4 Contagem regressiva com while
console.log("Contagem regressiva:");
let contagem = 5;
while (contagem >= 1) {
  console.log(contagem);
  contagem--;
}

// 3.5 Par ou ímpar de 1 a 20 com for e com while
console.log("Par/ímpar com for:");
for (let n = 1; n <= 20; n++) {
  console.log(`${n} é ${n % 2 === 0 ? "par" : "ímpar"}`);
}
console.log("Par/ímpar com while:");
let m = 1;
while (m <= 20) {
  console.log(`${m} é ${m % 2 === 0 ? "par" : "ímpar"}`);
  m++;
}

// 3.6 diaDaSemana com switch
function diaDaSemana(numero) {
  switch (numero) {
    case 1: return "Domingo";
    case 2: return "Segunda-feira";
    case 3: return "Terça-feira";
    case 4: return "Quarta-feira";
    case 5: return "Quinta-feira";
    case 6: return "Sexta-feira";
    case 7: return "Sábado";
    default: return "Número inválido";
  }
}
console.log("diaDaSemana(1):", diaDaSemana(1));
console.log("diaDaSemana(7):", diaDaSemana(7));
console.log("diaDaSemana(9):", diaDaSemana(9));
