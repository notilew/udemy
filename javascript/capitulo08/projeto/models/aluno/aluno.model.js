(function(window) {
    'use strict';

    window.Aluno = function() {
        var id = undefined;
        var nome = undefined;
        var cpf = undefined;
        var email = undefined;

        this.getId = function() {
            return id;
        }

        this.setId = function(novoId) {
            id = (novoId) ? novoId : 'ID não foi gerado!';
        }

        this.getNome = function() {
            return nome;
        }

        this.setNome = function(novoNome) {
            nome = (novoNome) ? novoNome.toLowerCase() : window.alert('O nome do aluno não foi enviado!');
        }

        this.getCPF = function() {
            return cpf;
        }

        this.setCPF = function(novoCPF) {
            cpf = (novoCPF) ? novoCPF.toString() : window.alert('O CFP do aluno não foi enviado!');
        }

        this.getEmail = function() {
            return email;
        }

        this.setEmail = function(novoEmail) {
            email = (novoEmail) ? novoEmail.toLowerCase() : window.alert('O e-mail do aluno não foi enviado!');
        }

        this.validaFormularioAluno = function() {
            var validado = true;

            if (!nome) {

            }
        }
    }
})(window);