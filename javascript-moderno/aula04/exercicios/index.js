const nome = 'Wellington';
const sobrenome = 'Felix'
const idade = 30;
const altura = 1.75;
const peso = 75;
const ano = 2019;

let imc;
let nascimento;

imc = peso / (altura * altura);
nascimento = ano - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg tem ${altura}m de altura e seu IMC é: ${imc}.`);
console.log(`${nome} ${sobrenome} nasceu em: ${nascimento}.`);