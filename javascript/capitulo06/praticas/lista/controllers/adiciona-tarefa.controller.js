(function(window, document) {
    'use strict';

    var nome = document.getElementById('input-nome');
    var descricao = document.getElementById('input-descricao');
    var adicionar = document.getElementById('button-adicionar');

    nome.addEventListener('keyup', adicionaTarefaComTeclaEnter);
    descricao.addEventListener('keyup', adicionaTarefaComTeclaEnter);
    adicionar.addEventListener('click', adicionaTarefaComBotaoAdicionar);
})(window, document);
