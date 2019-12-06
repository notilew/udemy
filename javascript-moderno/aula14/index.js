/**
 * Objetos (Básico).
 * Criando objetos.
 */

// criando objeto literal.
const pessoa01 = {
    nome: 'wellington',
    sobrenome: 'felix',
    idade: 30,
    exibeMensagem() {
        console.log(`${this.nome} diz oi..., minha idade é ${this.idade}`);
    },
    incrementaIdade() {
        this.idade++;
    }
};

console.log(pessoa01.exibeMensagem());
console.log(pessoa01.incrementaIdade());
console.log(pessoa01.exibeMensagem());

// criando função que cria objetos
function criaPessoa(nome, sobrenome, idade) {
    const pessoa = {
        nome,
        sobrenome,
        idade
    };

    return pessoa;
}

const pessoa02 = criaPessoa('palloma', 'felix', 29);
const pessoa03 = criaPessoa('maria', 'rita', 58);

console.log(pessoa02);
console.log(pessoa03);

/**
 * Observações:
 * Funções que criam objetos são chamadas de factory's.
 */