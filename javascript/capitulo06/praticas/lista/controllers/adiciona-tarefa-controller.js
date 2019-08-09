(function(window, document) {
    'use strict';

    var adicionar = document.getElementById('button-adicionar');

    adicionar.addEventListener('click', adicionaTarefa);

    function adicionaTarefa(evento) {
        evento.stopPropagation();

        var nome = document.getElementById('input-nome');
        var descricao = document.getElementById('input-descricao');
        /* var ul = document.querySelector('div ul');

        var tarefa = '';

        tarefa += '<li>';
        tarefa += '<input type="checkbox" id="checkbox-tarefa">' + nome.value + ' | ' + descricao.value;
        tarefa += '<button type="button" id="button-favorita">Favorita</button>';
        tarefa += '<button type="button" id="button-realizada">Realizada</button>';
        tarefa += '</li>';

        ul.innerHTML += tarefa;

        nome.value = '';
        descricao.value = ''; */

        if (nome.value || descricao.value) {
            window.alert('tem nome e descrição!');
        } else {
            window.alert('É necessário informar o nome e a descrição da tarefa!');
        }
    }
})(window, document);