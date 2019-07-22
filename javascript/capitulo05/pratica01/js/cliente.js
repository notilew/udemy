function Cliente() {

  this.id = undefined;
  this.nome = undefined;
  this.cpf = undefined;
  this.rg = undefined;
  this.email = undefined;
  this.telefone = undefined;
  this.nascimento = undefined;

  this.geraId = function() {
    this.id = Math.random();
  }

  this.obtemNome = function() {
    return this.nome;
  }

  this.defineNome = function(nome) {
    this.nome = nome;
  }

}

var cliente = new Cliente();

cliente.geraId();
cliente.defineNome('welligton aparecido felix');

console.log(cliente);