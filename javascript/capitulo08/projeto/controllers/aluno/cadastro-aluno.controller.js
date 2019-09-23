(function (window, document) {
    'use strict';

    document.querySelector('button').addEventListener('click', function (e) {
        e.stopPropagation();

        var formulario = document.querySelector('#main form');
        var aluno = new window.Aluno();

        aluno.novoCadastro();
        aluno.setNome(formulario.querySelector('#nome').value);
        aluno.setCPF(formulario.querySelector('#cpf').value);
        aluno.setEmail(formulario.querySelector('#email').value);
        aluno.setNotas(formulario.querySelectorAll)

        formulario.querySelector('#nome').value = '';
        formulario.querySelector('#cpf').value = '';
        formulario.querySelector('#email').value = '';

        if (aluno.getNome() && aluno.getCPF && aluno.getEmail()) {
            window.alert('Aluno cadastrado com sucesso!');

            var tbody = document.querySelector('table tbody');
            var tr = document.createElement('tr');

            for (var i = 0; i <= 2; i++) {
                var td = document.createElement('td');

                switch (i) {
                    case 0:
                        td.textContent = aluno.getNome();
                        break;
                    case 1:
                        td.textContent = aluno.getCPF();
                        break;
                    case 2:
                        td.textContent = aluno.getEmail();
                        break;
                }

                tr.appendChild(td);
            }

            tbody.appendChild(tr);
        }
    });
})(window, document);