((window) => {
    'use strict';

    window.pessoa = function(formulario) {
        this.identificador = undefined;
        this.nome = '';
        this.contato = new Array();

        if (formulario) {
            var contato = new Object();

            this.identificador = ++window.contador;
            this.nome = formulario.querySelector('#nome').value;

            contato.tipo = formulario.querySelector('#tipo').value;
            contato.telefone = formulario.querySelector('#telefone').value;
            contato.email = formulario.querySelector('#email').value;

            this.contato.push(contato);
        }
    }
})(window);