/**
 * Mais sobre Numbers.
 * Mais informações sobre numbers.
 */

const num01 = 1;
const num02 = 2.5;
const num03 = 5000;
const num04 = 10.0987654321;

// método toString() - retorna o valor como uma string, também retorna o valor em outra base (binário, decimal, hexadecimal).
console.log(`toString(): ${num01.toString() + num02}`);
console.log(`toString(2): ${num03.toString(2)}`);
console.log(`toString(10): ${num03.toString(10)}`);
console.log(`toString(16): ${num03.toString(16)}`);

// método toFixed() - retorna o valor com uma quantidade de casas decimais desejada.
console.log(`toFixed(): ${num04.toFixed(2)}`);
console.log(`toFixed(): ${num04.toFixed(3)}`);
console.log(`toFixed(): ${num04.toFixed(4)}`);

/**
 * Métodos Estáticos da Classe Number.
 * Aprendendo a utilizar os métodos estáticos da classe number.
 */

// método isInteger - retorna um booleano informando se o valor é inteiro ou não.
console.log(`Number.isInteger(): ${Number.isInteger(num01)}`);
console.log(`Number.isInteger(): ${Number.isInteger(num02)}`);

// método isNaN - retorna um booleano informando se o valor não é um número ou se é um número.
console.log(`Number.isNaN(): ${Number.isNaN(num01 * 'Olá')}`);
console.log(`Number.isNaN(): ${Number.isNaN(num01 * 5)}`);

let num05 = 0.7;
let num06 = 0.1;

num05 += num06; // 0.8
num05 += num06; // 0.9
num05 += num06; // 1.0
num05 += num06; // 1.1
num05 += num06; // 1.2
num05 += num06; // 1.3
num05 += num06; // 1.4
num05 += num06; // 1.5
num05 += num06; // 1.6
num05 += num06; // 1.7
num05 += num06; // 1.8
num05 += num06; // 1.9
num05 += num06; // 2.0

// solucionando imprecisão utilizando a classe Number e o método toFixed.
num05 = Number(num05.toFixed(2));

console.log(`solucionando imprecisão 1: ${num05}`);
console.log(`solucionando imprecisão 1: ${Number.isInteger(num05)}`);

let num07 = 0.7;
let num08 = 0.1;

// solucionando imprecisão utilizando cálculos
num07 = (((num07 * 100) + (num08 * 100)) / 100); // 0.8
num07 = (((num07 * 100) + (num08 * 100)) / 100); // 0.9
num07 = (((num07 * 100) + (num08 * 100)) / 100); // 1.0

console.log(`solucionando imprecisão 2: ${num07}`);
console.log(`solucionando imprecisão 2: ${Number.isInteger(num07)}`);

/**
 * Observações:
 * Existe uma impressão ao realizar cálculos com casas decimais no JavaScript;
 * Padrão utilizado para números decimais no JavaScript - IEEE 754-2008;
 */