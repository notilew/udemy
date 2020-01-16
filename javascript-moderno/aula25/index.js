/**
 * Atribuição via Desestruturação (Objetos).
 * Aprendendo a atribuir valores via desestruturação.
 */

const pessoa = {
    nome: 'Wellington',
    sobrenome: 'Felix',
    idade: 30,
    endereco: {
        rua: 'Ibirapuera',
        numero: 480,
        bairro: 'Itaipu',
        cep: '30692080',
        cidade: 'Belo Horizonte'
    }
};

// utilizando o nome da chave como nome da constante.
const { nome, sobrenome, idade } = pessoa;
console.log(nome, sobrenome, idade );

// alterando o nome da constante.
const { nome: descricao, sobrenome: outro } = pessoa;
console.log(descricao, outro);

// setando valores default.
const { nome: teste = 'Não Existe' } = pessoa;
console.log(teste);

// desestruturando objetos.
const { endereco: { rua, bairro, cidade } } = pessoa;
console.log(rua, bairro, cidade);

const { endereco: { rua: r }, endereco } = pessoa;
console.log(r, endereco);

// utilizando operador rest.
const { nome: nome02, ...restante } = pessoa;
console.log(nome02, restante);
/**
 * Observações:
 * O operador ... ao final da desestruturação é chamado de rest, ele retorna os valores restantes dos índices que não foram retornados para as variáveis declaradas;
 */