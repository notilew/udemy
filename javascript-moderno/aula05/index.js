/**
 * Diferenças entre var e let.
 * Desvantagens da utilização do comando var para declaração de variáveis.
 */

// permite a redeclaração de variáveis com o mesmo rótulo.
var nome = 'Wellington';
var nome = 'Felix';

console.log(nome);

// cria uma variável no escopo global que pode afetar outras variáveis com o mesmo rótulo no sistema.
sobrenome = 'Teixeira';

console.log(sobrenome);

/**
 * Observações:
 * Não declarar variáveis sem var, let ou const;
 * Não declarar variáveis com var pois, elas serão criadas no escopo global e podem afetar outras variáveis com o mesmo rótulo no sistema;
 */