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

console.log(logar);

console.log(!true);

console.log(!!true);

// valores falsos em JavaScript.
// false, 0, '', "", ``, null, undefined, NaN

// verificando retorno de camparações lógicas.
console.log(NaN && true);
console.log(0 && true);
console.log('wellington' && true && '');
console.log(0 || null || undefined || 'wellington felix' || true);

// utilizando valores lógicos para realizar uma condicional - short-circuit (curto-circuito).
function msg() {
    return 'a mensagem é...';
}

let exibir;

exibir = false;

console.log(`avaliação curto-circuito ${exibir && msg()}`);

exibir = true;

console.log(`avaliação curto-circuito ${exibir && msg()}`);



/**
 * Observações:
 * Operadores de comparações lógicas podem retornar um boolean como resultado de uma expressão ou o próprio valor literal da expressão.
 */
