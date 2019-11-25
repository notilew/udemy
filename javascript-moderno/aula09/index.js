/**
 * Mais sobre Strings.
 * Mais informações sobre as strings.
 */

// utilizando caractere de escape (\).
const str01 = "Wellington \"Felix\"";
const str02 = "Wellington \\Felix";
const str03 = "O rato roeu a roupa do rei de roma";

console.log(str01);
console.log(str02);

// visualizando índices da string.
console.log(str01[0]);
console.log(str01[1]);
console.log(str01[2]);
console.log(str01[3]);
console.log(str01[4]);
console.log(str01[5]);
console.log(str01[6]);
console.log(str01[7]);
console.log(str01[8]);
console.log(str01[9]);

// método charAt() - retorna o valor de um índice da string.
console.log(`charAt: ${str01.charAt(9)}`);

// método charCodeAt() - retorna o código da tabela ASC do valor de um índice da string.
console.log(`charCodeAt: ${str01.charCodeAt(9)}`);

// método concat() - realiza a concatenação de valores ao valor da string.
console.log(`concat(): ${str01.concat(' ', 'é um programador!')}`);

// método indexOf() - retorna o índice onde se inicia uma palavra ou o índice de um caracter buscando da esquerda para direita, retorna -1 caso não encontre a palavra ou caracter.
console.log(`indexOf(): ${str01.indexOf('Felix')}`);

// pesquisando apartir de um índice.
console.log(`indexOf(): ${str01.indexOf('Wellington', 5)}`);

// método lastIndexOf() - retorna o índice onde se inicia uma palavra ou o índice de um caracter buscando da direita para esquerda, retorna -1 caso não encontre a palavra ou caracter.
console.log(`lastIndexOf(): ${str01.lastIndexOf('Felix')}`);

// pesquisando apartir de um índice.
console.log(`lastIndexOf(): ${str01.lastIndexOf('ll', 5)}`);

// método match() - executa uma expressão regular na string.
console.log(`match(): ${str01.match(/[a-z]/g)}`);

// método search() - retorna o índice de um valor no array, aceita expressão regular.
console.log(`search(): ${str01.search('g')}`);
console.log(`search(): ${str01.search(/[a-z]/)}`);

// método replace() - substitui caracteres em uma string, aceita expressão regular.
console.log(`replace(): ${str03.replace('rato', 'gato')}`);
console.log(`replace(): ${str03.replace(/r/g, '#')}`);

// método slice() - retorna caracteres de uma string a partir de seus índices, aceita negativos.
console.log(`slice(): ${str03.slice(7, 11)}`);
console.log(`slice(): ${str03.slice(7)}`);
console.log(`slice(): ${str03.slice(-4)}`);

// método substring() - retorna caracteres de uma string a partir de seus índices, não aceita negativos.
console.log(`substring(): ${str03.substring(7)}`);
console.log(`substring(): ${str03.substring(7, 11)}`);
console.log(`substring(): ${str03.substring(str03.length -4)}`);

// método split() - retorna um array contendo os caracteres separador por um separador.
console.log(`split(): ${str03.split(' ')}`);
console.log(`split(): ${str03.split(' ', 2)}`);

// atributo length - retorna o tamanho de uma string, ou seja, a quantidade de caracteres presentes nela.
console.log(`length: ${str03.length}`);

/**
 * Observações:
 * Strings são indexavéis;
 */