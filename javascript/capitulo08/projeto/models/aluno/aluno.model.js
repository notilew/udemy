(function (window) {
    'use strict';

    window.Aluno = function () {
        var id = undefined;
        var nome = undefined;
        var cpf = undefined;
        var email = undefined;
        var notas = undefined;

        this.getId = function () {
            return id;
        }

        this.setId = function (novoId) {
            if (novoId) {
                id = novoId;
            } else {
                window.alert('O id do aluno não foi enviado!');
            }
        }

        this.geraId = function () {
            return Math.floor(Math.random() * 1000) + 1;
        }

        this.getNome = function () {
            return nome;
        }

        this.setNome = function (novoNome) {
            if (novoNome) {
                if (isNaN(novoNome)) {
                    nome = novoNome.toLowerCase();
                } else {
                    window.alert('O nome do aluno não pode conter números!');
                }
            } else {
                window.alert('O nome do aluno não foi enviado!');
            }
        }

        this.getCPF = function () {
            return cpf;
        }

        this.setCPF = function (novoCPF) {
            if (novoCPF) {
                if (!isNaN(novoCPF)) {
                    if (novoCPF.length === 11) {
                        cpf = novoCPF;
                    } else {
                        window.alert('O CPF do aluno deve conter 11 dígitos!');
                    }
                } else {
                    window.alert('O CPF do aluno deve conter apenas números!');
                }
            } else {
                window.alert('O CFP do aluno não foi enviado!');
            }
        }

        this.getEmail = function () {
            return email;
        }

        this.setEmail = function (novoEmail) {
            if (novoEmail) {
                email = novoEmail.toLowerCase();
            } else {
                window.alert('O e-mail do aluno não foi enviado!');
            }
        }

        this.getNotas = function () {
            return notas;
        }

        this.setNotas = function (novaNota) {
            if (novaNota) {
                notas.push(novaNota);
            } else {
                window.alert('A nota do aluno não foi enviada!');
            }
        }

        this.novoCadastro = function () {
            id = this.geraId();
            nome = '';
            cpf = '';
            email = '';
            notas = new Array();
        }
    }
})(window);