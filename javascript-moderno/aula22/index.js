/**
 * Objeto Date.
 * Aprendendo a utiliar o objeto Date.
 */

// calculando três horas em milisegundos.
const tresHorasMiliSegundos = 60 * 60 * 3 * 1000;

// calculando um dia em milisegundos.
const umDiaMiliSegundos = 60 * 60 * 24 * 1000;

// instanciando uma data no marco zero - 01/01/1970.
const data01 = new Date(0 + tresHorasMiliSegundos);
console.log(`objeto date no marco zero: ${data01.toString()}`);

// instanciando uma data com um dia após o marco zero.
const data02 = new Date(0 + tresHorasMiliSegundos + umDiaMiliSegundos);
console.log(`objeto date com um dia após o marco zero: ${data02.toString()}`);

// instanciando uma data com dados específicos.
const data03 = new Date(2019, 5, 16, 7, 30, 25, 1000); // (YYYY, M, DD, HH, MM, SS, M)
console.log(`objeto date com uma data com dados específicos: ${data03.toString()}`);

// instanciando uma data com uma data string.
const data04 = new Date('2019-06-16T07:30:25.999'); // (2019-06-16 07:30:25.999);
console.log(`objeto date com uma data em formato string ${data04.toString()}`);


/**
 * Métodos Estáticos do Objeto Date.
 */

// retorna o valor em milisegundos (timestamp) atual.
console.log(`retorna o valor em milisegundos (timestamp) atual: ${Date.now()}`);

// realiza o parse de uma data em formato string para milisegundos (timestamp).
console.log(`realiza o parse de uma data em formato string para milisegundos (timestamp): ${Date.parse('2019-12-28')}`);

// realiza o parse de uma data com dados específicos para milisegundos (timestamp).
console.log(`realiza o parse de uma data com dados específicos para milisegundos (timestamp): ${Date.UTC(2019, 5, 16)}`);

/**
 * Métodos do Objeto Date.
 */
const data = new Date();

// obtendo dia.
console.log(`obtendo dia: ${data.getDate()}`);

// obtendo mês.
console.log(`obtendo mês: ${data.getMonth()}`); // (de 0 'Janeiro' - 11 'Dezembro')

// obtendo ano.
console.log(`obtendo ano: ${data.getFullYear()}`);

// obtendo horas.
console.log(`obtendo horas: ${data.getHours()}`);

// obtendo minutos.
console.log(`obtendo minutos: ${data.getMinutes()}`);

// obtendo segundos.
console.log(`obtendo segundos: ${data.getSeconds()}`);

// obtendo milisegundos.
console.log(`obtendo milisegundos: ${data.getMilliseconds()}`);

// obtendo dia da semana.
console.log(`obtendo dia da semana: ${data.getDay()}`); // (de 0 'Domingo' - 6 'Sábado')

// obtendo o valor em milisegundos (timestamp).
console.log(`obtendo o valor em milisegundos (timestamp): ${data.getTime()}`);

// obtendo uma string representando a data específica do objeto.
console.log(`obtendo string representando a data do objeto: ${data.toString()}`);

/**
 * Observações:
 * O objeto Date é uma função construtora, nesse caso, é necessário utilizar o operador new para instânciar um objeto.
 * O objeto Date trabalha com valores, milisegundos ou datas em formato string como argumento.
 */