/**
 * Valores Primitivos e Valores por Referência.
 * Apredendo sobre valores primitivos e valores por referência.
 */

let nome = 'wellington';

// alterando o elemento 0.
nome[0] = 'a';

console.log(nome[0], nome);

// copiando valores de tipos primitivos.
let a = 'A';
let b = a;

console.log(`copiando valor a em b: ${a} - ${b}`);

b = 'B';

console.log(`alterando valor de b: ${a} - ${b}`);

// passando valores por referência
const c = [1, 2, 3];
const d = c;

console.log(`passando o valor por referência: ${c} - ${d}`);

c.push(4);

console.log(`adicionando valor por referência: ${c} - ${d}`);

d.pop();

console.log(`removendo valor por referência: ${c} - ${d}`);

// copiando valores não primitivos de um array utilizando o operador spread.
const e = [...c];

console.log(e);

e.push(6);

console.log(`${c} - ${d} - ${e}`);

// copiando valores não primitivos de um objeto utilizando o operador spread.
const f = {
    nome: 'wellington',
    sobrenome: 'felix'
};

const g = {...f};

console.log(f);
console.log(g);

g.nome = 'palloma';
g.sobrenome = 'miranda';

console.log(f);
console.log(g);

/**
 * Observações:
 * Utilizando o sinal de atribuíção, os valores de tipos de dados primitivos são copiados de uma variável para outra.
 * Valores de tipos de dados primitivos são imutáveis, ou seja, não mudam o seu conteúdo. Os tipos de dados primitivos são: NaN, undefined, null, boolean, number, string, bigint e symbol.
 * Valores de tipos de dados não primitivos são mutáveis, ou seja, mudam o seu conteúdo. Os tipos de dados não primitivos são: array, object e function.
 * Caso seja necessário copiar o valor de um tipo de dado não primitivo, utilize o operador spread.
 */