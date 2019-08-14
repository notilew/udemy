(function(window, document) {
    'use strict';

    var adicionar = document.getElementById('button-adicionar');

    adicionar.addEventListener('click', adicionaTarefa);

    var descricao = document.getElementById('input-descricao');

    descricao.addEventListener('keyup', keyup);

    function adicionaTarefa(evento) {
        evento.stopPropagation();

        var tarefa = new window.Tarefa();

        tarefa.setNome(document.getElementById('input-nome'));
        tarefa.setDescricao(document.getElementById('input-descricao'));

        if (tarefa.getNome().value && tarefa.getDescricao().value) {
            var ul = document.querySelector('div ul');
            var li = '';

            li += '<li>';
            li += '<span class="nome-tarefa">' + tarefa.getNome().value + '</span>' + ' | ' + tarefa.getDescricao().value;
            li += '</li>';

            ul.innerHTML += li;

            tarefa.getNome().focus();
            tarefa.getNome().value = '';
            tarefa.getDescricao().value = '';
        } else {
            window.alert('É necessário informar o nome e a descrição da tarefa!');
        }
    }

    function keyup(evento) {
        evento.stopPropagation();

        if (evento.keyCode === 13) {
            adicionaTarefa(evento);
        }
    }
})(window, document);