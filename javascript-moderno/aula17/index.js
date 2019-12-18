/**
 * Operadores de Comparação.
 * Operadores utilizados para comparar dois valores.
 */

/**
 * > maior que
 * >= maior ou igual a
 * < menor que
 * <= menor ou igual a
 * == igual
 * === estritamente igual
 * != diferente
 * !=== estritamente diferente
 */

const num01 = 10;
const num02 = '10';

const expressao01 = (num01 > num02);
const expressao02 = (num01 >= num02);
const expressao03 = (num01 < num02);
const expressao04 = (num01 <= num02);
const expressao05 = (num01 == num02);
const expressao06 = (num01 != num02);
const expressao07 = (num01 === num02);
const expressao08 = (num01 !== num02);

console.log(`maior que: ${expressao01}`);
console.log(`maior ou igual a: ${expressao02}`);
console.log(`menor que: ${expressao03}`);
console.log(`menor ou igual a: ${expressao04}`);
console.log(`igual: ${expressao05}`);
console.log(`diferente: ${expressao06}`);
console.log(`estritamente igual: ${expressao07}`);
console.log(`estritamente diferente: ${expressao08}`);

/**
 * Observações:
 * Operadores de comparação retornam um boolean como resultado de uma expressão.
 * Evite utilizar os operadores de comparação == e != porque eles não verificam o tipo do dado.
 */