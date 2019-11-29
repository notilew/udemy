const numero = Number(prompt('Digite um número:'));

const paragrafoNumero = document.getElementById('paragrafo-numero');
const paragrafoNumero = document.getElementById('paragrafo-raiz');
const paragrafoInteiro = document.getElementById('paragrafo-inteiro');
const paragrafoNaN = document.getElementById('paragrafo-nan');
const paragrafoArredondadoBaixo = document.getElementById('paragrafo-arredonda-baixo');
const paragrafoArredondadoCima = document.getElementById('paragrafo-arredonda-cim');
const paragrafoCasasDecimais = document.getElementById('paragrafo-casas-decimais');

document.body.innerHTML += `<p>Raíz Quadrada: ${Math.sqrt(numero)}</p>`;
document.body.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
document.body.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}</p>`;
document.body.innerHTML += `<p>Arredondado para baixo: ${Math.floor(numero)};</p>`;
document.body.innerHTML += `<p>Arredondado para cima: ${Math.ceil(numero)}</p>`;
document.body.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;