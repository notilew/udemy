var id = Math.floor(Math.random() * 10000);

window.document.getElementById('id').value = id;

function cadastrar() {
    var cliente = new Cliente();

    cliente.defineId(document.getElementById('id').value);
    cliente.defineNome(document.getElementById('nome').value);
    cliente.defineCPF(document.getElementById('cpf').value);
    cliente.defineRG(document.getElementById('rg').value);
    cliente.defineNascimento(document.getElementById('nascimento').value);
    cliente.defineTelefone(document.getElementById('telefone').value);
    cliente.defineEmail(document.getElementById('email').value);

    console.log(cliente);
}