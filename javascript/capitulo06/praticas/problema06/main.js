(function(window, document) {
    'use strict';

    function adicionaTarefa(e) {
        e.stopPropagation();

        if (!input.value) {
            window.alert('Preencha o nome da Tarefa!');
        } else {
            var li = '<li>' + input.value + '</li>';

            ul.innerHTML += li;

            input.value = '';
            input.focus(); // direciona o cursor para o elemento
        }
    }

    function verificaTecla(e) {
        e.stopPropagation();

        if (e.keyCode === 13) {
            adicionaTarefa(e);
        }
    }

    var ul = document.querySelector('div ul');
    var input = document.getElementById('tarefa');
    var button = document.getElementById('btn');

    button.addEventListener('click', adicionaTarefa);
    input.addEventListener('keyup', verificaTecla);
})(window, document);