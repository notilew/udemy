function meuEscopo() {
    const resultado = document.querySelector('.resultado');
    const form = document.querySelector('.form');

    const pessoas = [];

    form.addEventListener('submit', (evento) => {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        const pessoa = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        };

        pessoas.push(pessoa);

        console.log(pessoas);

        resultado.innerHTML += `<p>${pessoa.nome} ${pessoa.sobrenome} ${pessoa.peso} ${pessoa.altura}</p>`;
    });
}

meuEscopo();