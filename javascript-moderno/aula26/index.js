/**
 * For Clássico, For In e For Of.
 * Aprendendo a utilizar a estrutura de repetição for.
 */

// declarando for, percorrendo de um número menor para um maior.
for (let i = 0; i <= 5; i++) {
    console.log(`Linha ${i}`);
}

console.log('\n');

// declarando for, percorrendo de um número maior para um menor.
for (let i = 500; i >= 400; i -= 10) {
    console.log(`Linha ${i}`);
}

console.log('\n');

// incrementando de 10 em 10.
for (let i = 400; i <= 500; i += 10) {
    console.log(`Linha ${i}`);
}

console.log('\n');

// declarando for, percorrendo de um número negativo para um positivo.
for (let i = -100; i <= 100; i += 10) {
    console.log(`Linha ${i}`);
}

console.log('\n');

// verificando números.
for (let i = 0; i <= 30; i++) {
    const flag = (i % 2 === 0) ? 'Par' : 'Ímpar';
    console.log(i, flag);
}

console.log('\n');

// percorrendo array.
const frutas = ['maça', 'laranja', 'pêra', 'uva', 'abacate'];

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

// for in.
for (const chave in frutas) {
    console.log(`índice/chave: ${chave} valor: ${frutas[chave]}`);
}

const pessoa = {
    nome: 'wellington',
    sobrenome: 'felix',
    idade: 30,
    peso: 75.5
};

for (const chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`);
}

// for of.
for (const valor of frutas) {
    console.log(valor);
}

// exibindo valor de objeto utilizando a sintaxe ['índice'].
console.log(`exibindo valor de objeto: ${pessoa['nome']}`);

/**
 * Observações:
 * O for possui 3 expressões obrigatórias, variável inicial, condição de parada e incremento;
 * No for in, a variável informada no for conterá a chave do índice do array ou objeto;
 * No for of, a variável informada no for conterá o valor do array;
 * É possível utilizar a sintaxe ['índice'] para pegar um valor em um array ou objeto;
 */