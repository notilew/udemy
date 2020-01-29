/**
 * While e Do While.
 * Aprendendo a utilizar os laços de repetição while e do while.
 */

// while.
const nome = 'wellington aparecido felix\n';
let i = 0;

while (i < nome.length) {
    console.log(nome[i]);
    i++;
}

const min = 1;
const max = 50;

function geraNumeroAleatorio(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

let numero = geraNumeroAleatorio(min, max);

/* while (numero !== 25) {
    numero = geraNumeroAleatorio(min, max);
    console.log(numero);
} */

do {
    numero = geraNumeroAleatorio(min, max);
    console.log(numero);
} while (numero !== 25);

/**
 * Observações:
 * O laço while verifica a expressão antes de começar a iterar;
 * O laço do while itera uma primeira vez e depois verifica a expressão;
 * Os laçõs while e do while são utilizados quando não se sabe quantas vezes terá que iterar sobre uma massa de dados.
 */