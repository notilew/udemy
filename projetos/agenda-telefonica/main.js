((window, document) => {
    'use strict';

    window.contador = 0;
    window.contatos = [];

    window.addEventListener('load', () => {
        document.getElementById('cadastro').style.display = 'none';
        //document.getElementById('lista').style.display = 'none';
    });
})(window, document);