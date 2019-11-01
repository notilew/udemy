((window, document) => {
    'use strict';

    document.getElementById('listar').addEventListener('click', (e) => {
        e.preventDefault();

        if (window.contatos.length > 0) {
            var lista = document.getElementById('lista');
            var bloco = document.createElement('div');

            lista.querySelectorAll('div').forEach((bloco) => {
                if (bloco) {
                    bloco.parentNode.removeChild(bloco);
                }
            });

            window.contatos.forEach((contato) => {
                var tr = document.createElement('tr');
                var td = document.createElement('td');

                titulo.textContent = contato.nome.toLowerCase();
                identificador.textContent = 'Identificador: ' + contato.identificador;
                tipo.textContent = 'Tipo: ';
                telefone.textContent = 'Telefone: ' + contato.contatos[0].telefone;
                email.textContent = 'E-mail: ' + contato.contatos[0].email;

                if (contato.contatos[0].tipo === '1') {
                    tipo.textContent += 'Residêncial';
                } else if (contato.contatos[0].tipo === '2') {
                    tipo.textContent += 'Comercial';
                } else {
                    tipo.textContent += 'Móvel';
                }

                bloco.appendChild(titulo);
                bloco.appendChild(identificador);
                bloco.appendChild(tipo);
                bloco.appendChild(telefone);
                bloco.appendChild(email);

                lista.appendChild(bloco);
            });

            lista.style.display = 'block';
        } else {
            window.alert('Não existem contatos salvos na agênda!');
        }
    });
})(window, document);