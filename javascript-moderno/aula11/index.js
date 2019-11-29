/**
 * Objeto Math.
 * Utilizando os métodos estáticos do objeto Math.
 */

let num01 = 9.56854578;
let num02 = 9.46854578;

// método floor() - arredonda um valor para baixo.
console.log(`método floor(): ${Math.floor(num01)}`);

// método ceil() - arredonda um valor para cima.
console.log(`método ceil(): ${Math.ceil(num01)}`);

// método round() - arredonda um valor para cima ou para baixo de acordo com o valor das casas decimais.
console.log(`método round(): ${Math.round(num01)}`);
console.log(`método round(): ${Math.round(num02)}`);

// método max() - retorna o maior valor de uma sequência de valores.
console.log(`método max(): ${Math.max(1, 2, 100, -3, 10, -100, 1500)}`);

// método min() - retorna o menor valor de uma sequência de valores.
console.log(`método min(): ${Math.min(1, 2, 100, -3, 10, -100, 1500)}`);

// método random() - retorna um número aleatório entre 0 e 1, mas 1 não é incluído.
console.log(`método random(): ${Math.random()}`);
console.log(`método random(): ${Math.round(Math.random() * 10)}`);

/**
 * Observações:
 * O JavaScript não retorna erro em caso de cálculos com divisão por 0, nesse caso, é retornado o valor infinity;
 */