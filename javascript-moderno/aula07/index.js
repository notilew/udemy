/**
 * Operadores Aritméticos.
 * Tipos de operadores aritméticos do JavaScript.
 */

const str1 = '2';
const num1 = 5;
const num2 = 10

// concatenação
console.log(str1 + num1); // 25

// soma
console.log(num1 + num2); // 15

// subtração
console.log(num1 - num2) // -5

// multiplicação
console.log(num1 * num2); // 50

// divisão
console.log(num1 / num2); // 0.5

// potenciação
console.log(num1 ** num2); // 9765625

// módulo
console.log(num2 % num1); // 0

/**
 * Observações:
 * Precedência de operadores: (), **, *, /, %, + e -;
 */

/**
 * Operador de Incremento.
 * Aprendendo a utilizar o operador de incremento, pós-incremento e pré-incremento.
 */

let contador01 = 1;
let contador02 = 1;

// pós-incremento - qualquer outra instrução será executada antes do valor ser incrementado.
console.log(`contador01 pós-incremento: ${contador01++}`);

// pré-incremento - o valor será incrementao primeiro e depois qualquer outra instrução será executada.
console.log(`contador02 pré-incremento: ${++contador02}`);

/**
 * Operador de Decremento.
 * Aprendendo a utilizar o operador de decremento, pós-decremento e pré-decremento.
 */

let contador03 = 1;
let contador04 = 1;

// pós-decremento - qualquer outra instrução será executada antes do valor ser decrementado.
console.log(`contador03 pós-decremento: ${contador03--}`);

// pré-decremento - o valor será decrementado primeiro e depois qualquer outra instrução será executada.
console.log(`contador04 pré-decremento: ${--contador04}`);

/**
 * Operadores de Atribuição.
 * Aprendendo a utilizar os operadores de atribuição de valores.
 */

let contador05 = 0;

// operador de atribuição.
contador05 = 1;
console.log(`valor do contador05 - atribuição: ${contador05}`);

// operador de atribuição - potenciação - atalho.
contador05 **= 2;
console.log(`valor do contador05 - potenciação - atalho: ${contador05}`);

// operador de atribuição - multiplicação - atalho.
contador05 *= 2;
console.log(`valor do contador05 - multiplicação - atalho: ${contador05}`);

// operador de atribuição - divisão - atalho.
contador05 /= 2;
console.log(`valor do contador05 - divisão - atalho: ${contador05}`);

// operador de atribuição - soma - atalho.
contador05 += 2;
console.log(`valor do contador05 - atribuição - atalho: ${contador05}`);

// operador de atribuição - subtração - atalho.
contador05 -= 2;
console.log(`valor do contador05 - subtração - atalho: ${contador05}`);

/**
 * Conversão de String para Number.
 * Formas de converter texto para números.
 */

// método parseInt - retorna a parte inteira de uma string numérica.
console.log(`conversão de string numérica para inteiro: ${parseInt('5.2')}`);

// método parseFloat - retorna o valor de uma string numérica como decimal.
console.log(`conversão de string numérica para decimal: ${parseFloat('5.2')}`);

// classe Number() - retorna o valor de uma string numérica convertido em inteiro ou decimal.
console.log(`conversão de string numérica: ${Number('5.2')} / ${Number('5')}`);