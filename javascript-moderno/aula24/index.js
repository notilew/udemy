/**
 * Atribuição via Desestruturação (Arrays).
 * Aprendendo a atribuir valores via desestruturação.
 */

let a = 'A';
let b = 'B';
let c = 'C';

let d = 1;
let e = 2;
let f = 3;

// reatribuindo valores via desestruturação nas variáveis exemplo 01.
[a, b, c] = ['B', 'C', 'A'];

console.log(`exemplo 01: ${a}, ${b}, ${c}`);

// reatribuindo valores via desestruturação nas variáveis exemplo 02.
const numeros01 = [e, f, d];

[d, e, f] = numeros01;

console.log(`exemplo 02: ${d}, ${e}, ${f}`);

// reatribuindo valores via desestruturação utilizando variáveis.
const numeros02 = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [primeiro, segundo, terceiro, , , sexto, ...restante] = numeros02;

console.log(`utilizando variáveis: ${primeiro}, ${segundo}, ${terceiro}, ${sexto}`);
console.log(`utilizando variáveis, demais números: ${restante}`);

// reatribuindo valores via desestruturação utilizando arrays multidimensionais.
// índices              0          1          2
// índices           0  1  2    0  1  2    0  1  2
const numeros03 = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
const [lista01, lista02, lista03] = numeros03;

console.log(`utilizando array multidimensional: ${lista02[0]}`);

/**
 * Observações:
 * O operador ... ao final da desestruturação é chamado de rest, ele retorna os valores restantes dos índices que não foram retornados para as variáveis declaradas;
 * Caso informe valores vazios na desestruturação utilizando variáveis a engine do JavaScript irá pular o índice vazio e pegará o próximo índice que possuir valor;
 */