/**
 * Try Catch, Throw e Finally.
 * Aprendendo a tratar erros com try catch, lançar erros com throw e finalizar a execução com finally.
 */

// sintaxe do try catch.
try {
    console.log(numero);
} catch (e) {
    console.log(e, 'variável numero não foi definida!');
}

// sintaxe do throw.
/* throw new Error('utilizando a função construtora Error');
throw new ReferenceError('utilizando a função construtora ReferenceError'); */

// simulando lançamento e tratamento de erros.
const soma = (num1, num2) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new Error('a soma só pode ser realizada com números!');
    }

    return num1 + num2;
};

const num1 = 5;
const num2 = '10';

try {
    console.log(soma(num1, num2));
} catch (e) {
    console.log(e);

    console.log(soma(Number(num1), Number(num2)));
} finally {
    console.log('sempre é executado, mas pode ser omitido!');
}

// simulando código utilizando finally.
try {
    console.log('abrindo arquivo ou conexão de dados...');
    console.log('erro durante manipulação do arquivo ou consulta de dados...');
} catch (e) {
    console.log('tratando excessão...');
} finally {
    console.log('fechando arquivo ou conexão de dados...');
}

/**
 * Observações:
 * Quando se sabe que algum trecho do código pode gerar um erro, trata-se esse erro;
 * Deve-se utilizar o catch para salvar o erro em um arquivo ou base de dados;
 * Não deve exibir o erro para o usuário;
 */