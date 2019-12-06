/**
 * Arrays (Básico).
 * Manipulando arrays.
 */

let removido = null;

// declarando um array.
const alunos = ['Luiz', 'Maria', 'João'];

// alterando elementos do array.
alunos[0] = 'Antônio';
alunos[1] = 'Márcia';

// verificano o tamanho do array com o atributo length.
console.log(`o tamanho do array é: ${alunos.length}`);

// adicionando novos elementos com o atributo length.
alunos[alunos.length] = 'Juliana';
alunos[alunos.length] = 'Sandra';

// adicionando novos elementos com o método push() - adiciona no final do array.
alunos.push('Palloma');

// adicionando novos elementos com o método unshift() - adiciona no início do array.
alunos.unshift('André');

// retornando alguns elementos do array com o método slice() - aceita valor negativos.
console.log(`as posições 0, 1 e 2 do array são: ${alunos.slice(0, 3)}`);

// removendo elemento com o método pop() - remove no final do array.
removido = alunos.pop();
console.log(`aluno removido do final do array: ${removido}`);

// removendo elemento com o método shift() - remove no início do array.
removido = alunos.shift();
console.log(`aluno removido do início do array: ${removido}`);

// removendo elemento com comando delete - remove o elemento e deixa o índice vazio.
delete alunos[1];

// verificando se alunos é do tipo array com o comando instanceof.
console.log(`alunos é do tipo Array: ${alunos instanceof Array}`);
console.log(alunos);

/**
 * Observações:
 * Arrays são coleções de dados;
 * Arrays são indexados por elementos;
 * O tipo de dados de um array é object;
 * Arrays criados como constantes podem ter seus elementos alterados, mas não podem ter valores reatribuídos, pois reatribuír um valor irá alterar a referência da variável.
 */