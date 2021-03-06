/**
 * Tipos Primitivos de Dados do JavaScript.
 * Analisando os tipos de dados primitivos que o JavaScript possui.
 */

// string -> texto.
const string01 = 'Wellington';
const string02 = "Wellington";
const string03 = `Wellington`;

// number -> números.
const number01 = 10;
const number02 = 10.52;
const number03 = 'Wellington'; // utilizando para exemplificar um NaN.

// undefined -> indefinido, não aponta para nenhum local na memória.
let nome;

// null -> nulo, não aponta para nenhum local da memória.
let sobrenome = null;

// boolean -> boleano, valor lógico que pode representar verdadeiro ou falso (true/false).
let aprovado = true;

// NaN -> not a number, valor retornado quando o engine do JavaScript não conseguir realizar um cálculo.
console.log(number01 * number03);

// Infinity -> infinito, valor que representa números infinitos.
console.log(100 / 0);

/**
 * Observações:
 * Não declarar uma variável explicitamente com o valor undefined, esse valor é automaticamente atribuído pelo engine JS;
 * A diferença entre null e undefined é que, quando atribuímos null à uma variável, estamos explicitamente dizendo que essa variável não aponta para nenhum local da memória;
 * Tipos de dados primitivos não são passados como referência quando utilizamos o sinal de atribuição;
 */