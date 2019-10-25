((window, document) => {
    'use strict';

    document.getElementById('listar').addEventListener('click', () => {
        var bloco = document.createElement('div');
        var titulo = document.createElement('h3');
        var identificador = document.createElement('p');
        var tipo = document.createElement('p');
        var telefone = document.createElement('p');
        var email = document.createElement('p');

        titulo.textContent = window.teste.nome.toLowerCase();
        identificador.textContent = 'Identificador: ' + window.teste.identificador;
        tipo.textContent = 'Tipo: ';
        telefone.textContent = 'Telefone: ' + window.teste.contato[0].telefone;
        email.textContent = 'E-mail: ' + window.teste.contato[0].email;

        if (window.teste.contato[0].tipo === '1') {
            tipo.textContent += 'Residêncial';
        } else if (window.teste.contato[0].tipo === '2') {
            tipo.textContent += 'Comercial';
        } else {
            tipo.textContent += 'Móvel';
        }

        bloco.appendChild(titulo);
        bloco.appendChild(identificador);
        bloco.appendChild(tipo);
        bloco.appendChild(telefone);
        bloco.appendChild(email);

        listagem.appendChild(bloco);
    });
})(window, document);