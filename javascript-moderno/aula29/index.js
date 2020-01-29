/**
 * Comandos Break e Continue.
 * Aprendendo a utilizar os comandos break e continue.
 */

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const numero of numeros) {
    if (numero === 2) continue;
    if (numero === 4) continue;
    if (numero === 6) continue;
    if (numero === 8) continue;

    console.log(numero);
}

console.log('\n');

for (const numero of numeros) {
    if (numero === 4) {
        break;
    }

    console.log(numero);
}

/**
 * Observações:
 * O comando continue faz com o qualquer código abaixo dele não seja executado, voltando ao início da iteração seguinte;
 * O comando break faz com que a execução do código para na iteração em questão e continue fora do laço de repetição;
 * Os comandos break e continue poupam recursos de máquina pois, o desenvolvedor tem o controle de continuar ou sair do laço;
 * Os comandos break e continue podem ser utilizados em qualquer tipo de laço de repetição (while, do while, for, for in e for of);
 */