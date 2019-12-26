/**
 * If, Else If e Else.
 * Utilizando as três estruturas condicionais para desvio de fluxo no código.
 */

function mensagem(msg) {
    console.log(msg);
}

const horario = '10:30:01';

if (horario >= '00:00:00' && horario <= '11:59:59') {
    mensagem('Bom dia!');
} else if (horario >= '12:00:00' && horario <= '16:59:59') {
    mensagem('Boa tarde!');
} else if (horario >= '17:00:00' && horario <= '23:59:59') {
    mensagem('Boa noite!');
}

const numero = 10;

if (numero >= 0 && numero <= 5) {
    mensagem('O número está entre 0 e 5');
} else if (numero >= 6 && numero <= 8) {
    mensagem('O número está entre 6 e 8');
} else if (1 === 1) {
    mensagem('Condição literal');
} else if (numero >= 9 && numero <= 11) {
    mensagem('O número está entre 9 e 11') ;
} else {
    mensagem('O número não está entre 0 e 11');
}

/**
 * Observações:
 * O bloco if else para a execução do bloco ao encontrar o primeiro bloco verdadeiro.
 */