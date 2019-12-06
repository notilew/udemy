const numero = Number(prompt('Digite um número:'));

const titulo = document.getElementById('titulo');
const informacoes = document.getElementById('informacoes');

titulo.innerHTML = numero;
informacoes.innerHTML += `<p>Raíz Quadrada: ${Math.sqrt(numero)}</p>`;
informacoes.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
informacoes.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}</p>`;
informacoes.innerHTML += `<p>Arredondado para baixo: ${Math.floor(numero)}</p>`;
informacoes.innerHTML += `<p>Arredondado para cima: ${Math.ceil(numero)}</p>`;
informacoes.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;