/**
 * Operadores Lógicos.
 * Operadores utilizados para verificar comparações lógicas.
 */

/**
 * && - AND
 * || - OR
 * ! - NOT
 */

const and = (true && true);
const or = (false || true);

console.log(`and: ${and}`);
console.log(`or: ${or}`);

const email = 'wellington.felix@avancoinfo.com.br';
const senha = '123456';

const logar = (email === 'wellington.felix@avancoinfo.com.br' && senha === '123456');

if (logar) {
    console.log('vc logou corretamente!');
}
/**
 * Observações:
 * Operadores de comparações lógicas retornam um boolean como resultado de uma expressão.
 */
