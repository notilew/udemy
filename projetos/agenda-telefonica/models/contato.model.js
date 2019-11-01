((window) => {
    'use strict';

    window.Contato = function(formulario) {
        this.identificador = undefined;
        this.nome = '';
        this.contatos = new Array();

        if (formulario) {
            var contato = new Object();

            this.identificador = ++window.contador;
            this.nome = formulario.querySelector('#nome').value;

            contato.tipo = formulario.querySelector('#tipo').value;
            contato.telefone = formulario.querySelector('#telefone').value;
            contato.email = formulario.querySelector('#email').value;

            this.contatos.push(contato);

            formulario.querySelector('#nome').value = '';
            formulario.querySelector('#telefone').value = '';
            formulario.querySelector('#email').value = '';
        }
    }
})(window);