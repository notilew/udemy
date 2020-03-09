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
let nome02 = 'Maria'; // criando
var nome03 = 'José'; // criando
// console.log(`testando escopo de bloco do comando let: ${nome02}`);

if (true) {
    let nome02 = 'Rita'; // criando
    var nome03 = 'Maria'; // re-declarando
    // console.log(`testando escopo de bloco do comando let: ${nome02}`);

    if (true) {
        let nome02 = 'Felix'; // criando
        var nome03 = 'Felix'; // re-declarando
        console.log(`testando escopo de bloco do comando let: ${nome02}`);
    }
}

console.log(`testando escopo de bloco do comando let: ${nome03}`);

// testando escopo de função com let e var.
var nome04 = 'Fábia';

function msg() {
    var nome05 = 'Paola';

    console.log(nome04);
    console.log(nome05);

    if (true) {
        console.log(nome05);
    }
}

console.log(nome04);

msg();

/**
 * Observações:
 * Será retornado um erro caso duas variáveis de mesmo nome sejam declaradas com let;
 * O JavaScript irá re-declarar as variáveis com mesmo nome declaradas com var;
 * Não declarar variáveis sem var, let ou const;
 * Não declarar variáveis com var pois, elas serão criadas no escopo global e podem afetar outras variáveis com o mesmo rótulo no sistema;
 * O comando let tem escopo de bloco;
 * O comando var tem escopo de função;
 */