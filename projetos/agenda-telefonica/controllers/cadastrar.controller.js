((window, document) => {
    'use strict';

    document.getElementById('cadastrar').addEventListener('click', (e) => {
        e.preventDefault();

        var cadastro = document.getElementById('cadastro');

        cadastro.style.display = 'block';
    });
})(window, document);