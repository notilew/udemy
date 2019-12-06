/**
 * Funções (Básico).
 * Criando funções.
 */

// criando função clássica.
function saudacao(nome) {
    return `Bom dia ${nome}`;
}

// criando função com valores de parâmetro default.
function soma(num01 = 0, num02 = 0) {
    return num01 + num02;
}

// criando função anônima clássica.
const raiz = function(num) {
    return num ** 0.5;
};

// criando funções anônimas com arrow function.
const subtracao = (num01, num02) => {
    return num01 - num02;
};

// chamando função passando argumentos
const somatorio01 = soma(100, 50);

// chamando função sem passar argumentos
const somatorio02 = soma();

console.log(saudacao('Wellington'));
console.log(somatorio01);
console.log(somatorio02);
console.log(raiz(9));
console.log(subtracao(10, 5));

/**
 * Observações:
 * É interessante criar cada função com apenas um trabalho, caso necessário, crie várias funções repassando um trabalho para cada uma.
 */