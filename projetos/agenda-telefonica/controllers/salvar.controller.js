((window, document) => {
    'use strict';

    document.getElementById('salvar').addEventListener('click', (e) => {
        e.preventDefault();

        var listagem = document.getElementById('listagem');
        var formulario = document.getElementById('formulario');

        window.teste = new window.pessoa(formulario);

        window.contatos.push(window.teste);
    });

    document.getElementById('salvar-mais').addEventListener('click', (e) => {
        e.preventDefault();

        var formulario = document.getElementById('formulario');

        window.teste = new window.teste();

        pessoa.nome = formulario.querySelector('#nome').value;
        pessoa.contato.push({
            tipo: formulario.querySelector('#tipo').value,
            telefone: formulario.querySelector('#telefone').value,
            email: formulario.querySelector('#email').value
        });

        console.log(pessoa);
    });
})(window, document);