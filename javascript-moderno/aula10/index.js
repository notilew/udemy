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

num05 = Number(num05.toFixed(1));
console.log(num05);
console.log(Number.isInteger(num05));