function Cliente() {

    this.id = undefined;
    this.nome = undefined;
    this.cpf = undefined;
    this.rg = undefined;
    this.nascimento = undefined;
    this.telefone = undefined;
    this.email = undefined;

    this.obtemId = function() {
        return this.id;
    }

    this.defineId = function(id) {
        this.id = id;
    }

    this.obtemNome = function() {
        return this.nome;
    }

    this.defineNome = function(nome) {
        this.nome = nome;
    }

    this.obtemCPF = function() {
        return this.cpf;
    }

    this.defineCPF = function(cpf) {
        this.cpf = cpf;
    }

    this.obtemRG = function() {
        return this.rg;
    }

    this.defineRG = function(rg) {
        this.rg = rg;
    }

    this.obtemNascimento = function() {
        return this.nascimento;
    }

    this.defineNascimento = function(nascimento) {
        this.nascimento = nascimento;
    }

    this.obtemTelefone = function() {
        return this.telefone;
    }

    this.defineTelefone = function(telefone) {
        this.telefone = telefone;
    }

    this.obtemEmail = function() {
        return this.email;
    }

    this.defineEmail = function(email) {
        this.email = email;
    }

}