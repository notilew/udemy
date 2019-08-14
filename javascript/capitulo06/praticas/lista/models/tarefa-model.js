(function(window) {
    'use strict';

    function Tarefa() {

        var nome = undefined;
        var descricao = undefined;

        this.getNome = function() {
            return nome;
        };

        this.setNome = function(novoNome) {
            nome = novoNome;
        };

        this.getDescricao = function() {
            return descricao;
        };

        this.setDescricao = function(novaDescricao) {
            descricao = novaDescricao;
        };

    }

    window.Tarefa = Tarefa;
})(window);