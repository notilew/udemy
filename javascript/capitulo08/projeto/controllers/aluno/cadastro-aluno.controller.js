(function(window, document) {
    'use strict';

    window.addEventListener('load', function() {
        document.querySelector('#id').value = Math.floor(Math.random() * 1000) + 1;
    });

    document.querySelector('button').addEventListener('click', function(e) {
        e.stopPropagation();

        var formulario = document.querySelector('#main form');

        if (formulario) {
            var aluno = new window.Aluno();

            aluno.setId(formulario.querySelector('#id').value);
            aluno.setNome(formulario.querySelector('#nome').value);
            aluno.setCPF(formulario.querySelector('#cpf').value);
            aluno.setEmail(formulario.querySelector('#email').value);

            var validado = aluno.validaFormularioAluno()
        }
    });
})(window, document);