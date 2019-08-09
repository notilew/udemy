(function(window) {
    'use strict';

    function Tarefa() {

        var nome = undefined;
        var descricao = undefined;
        var favorita = undefined;
        var realizada = undefined;

        this.construtor = construtor;
        this.getNome = getNome;
        this.setNome = setNome;
        this.getDescricao = getDescricao;
        this.setDescricao = setDescricao;
        this.alteraPropriedadeFavorita = alteraPropriedadeFavorita;
        this.alteraPropriedadeRealizada = alteraPropriedadeRealizada;

        function construtor() {
            nome = '';
            descricao = '';
            favorita = false;
            realizada = false;
        }

        function getNome() {
            return nome;
        }

        function setNome(novoNome) {
            nome = novoNome;
        }

        function getDescricao() {
            return descricao;
        }

        function setDescricao(novaDescricao) {
            descricao = novaDescricao;
        }

        function alteraPropriedadeFavorita() {
            favorita = !favorita;
        }

        function alteraPropriedadeRealizada() {
            realizada = !realizada;
        }

    }

    window.Tarefa = Tarefa;
})(window);