((window, document) => {
    'use strict';

    document.getElementById('cadastrar').addEventListener('click', (e) => {
        e.preventDefault();

        var cadastro = document.getElementById('cadastro');

        cadastro.style.display = 'block';
    });

    document.getElementById('salvar').addEventListener('click', (e) => {
        e.preventDefault();

        var formulario = document.getElementById('formulario');

        var contato = new window.Contato(formulario);

        window.contatos.push(contato);
        console.log(window.contatos);
    });
})(window, document);