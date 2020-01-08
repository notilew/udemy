/**
 * Diferenças entre var e let.
 * Desvantagens da utilização do comando var para declaração de variáveis.
 */

// permite a redeclaração de variáveis com o mesmo rótulo.
var nome01 = 'Wellington';
var nome01 = 'Felix';

console.log(nome01);

// cria uma variável no escopo global que pode afetar outras variáveis com o mesmo rótulo no sistema.
sobrenome = 'Teixeira';

console.log(sobrenome);

// testando escopo de bloco com os comandos let e var.
let nome02 = 'Maria';
var nome03 = 'José';
// console.log(`testando escopo de bloco do comando let: ${nome02}`);

if (true) {
    let nome02 = 'Rita';
    var nome03 = 'Maria';
    // console.log(`testando escopo de bloco do comando let: ${nome02}`);

    if (true) {
        let nome02 = 'Felix';
        var nome03 = 'Felix';
        console.log(`testando escopo de bloco do comando let: ${nome02}`);
    }
}

console.log(`testando escopo de bloco do comando let: ${nome03}`);

/**
 * Observações:
 * Não declarar variáveis sem var, let ou const;
 * Não declarar variáveis com var pois, elas serão criadas no escopo global e podem afetar outras variáveis com o mesmo rótulo no sistema;
 * O comando let tem escopo de bloco;
 * O comando var tem escopo de função;
 */