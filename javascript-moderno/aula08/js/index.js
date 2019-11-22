/**
 * Alert, Confirm e Prompt (Navegador).
 * Utilizando os métodos alert, confirm e prompt no navegador.
 */

let confirmacao;
let texto;

// método alert - exibe alertas na aba do navegador.
alert('Exibindo Alerta!');

// método confirm - exibe uma caixa de diálogo com uma condicional e retorna um boolean true/false.
confirmacao = confirm('Deseja apagar o registro?');

console.log(confirmacao);

// método prompt - exibe uma caixa com de diálogo com um input text e retorna o valor digitado na caixa.
texto = prompt('Digite o seu nome:');

console.log(texto);