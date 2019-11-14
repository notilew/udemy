/**
 * Variáveis com let.
 * Espaço na memória onde pode-se armazenar valores. Variáveis podem ter seus valores alterados.
 */

// declarando e inicializando variável.
let nome = 'Wellington Felix';

console.log(nome, 'nasceu em 1989.');
console.log('Em 2017', nome, 'conheceu Palloma.');
console.log(nome, 'casou-se com Palloma em 2019.');
console.log('O filho de', nome, 'chamará eduardo.');

// declarando e não inicializando variável que terá o seu valor como undefined.
let sobrenome;

console.log('O valor de sobrenome é:', sobrenome);

// inicializando variável
sobrenome = 'Felix';

console.log('O valor de sobrenome é:', sobrenome);

// alterando variável
sobrenome = 'Miranda';

console.log('O valor de sobrenome é:', sobrenome);

/**
 * Observações:
 *  Não utilizar var para criar variáveis;
 *  Não redeclarar a mesma variável com let;
 */