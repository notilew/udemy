/**
 * Operador Ternário.
 * Aprendendo a utiliar o operador ternário.
 */

const pontuacao = 850;

// operação ternária.
const tipo = (pontuacao >= 1000) ? 'Usuário Vip' : 'Usuário Comum';

console.log(tipo);

// criando variável com valor padrão - fallback.
const corUsuario = null;
const corPadrao = (corUsuario || 'black');

console.log(corPadrao);

/**
 * Observações:
 * Podemos utilizar o operador ternário para encurtar o código quando precisamos analisar uma condição simples.
 */