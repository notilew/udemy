function validaDados(peso, altura) {
    let validacao = true;

    if (peso === 0 || Number.isNaN(peso)) {
        validacao = false;

        document.querySelector('div#resultado').innerHTML = '<p class="erro">Peso Inválido!</p>';
    } else if (altura === 0 || Number.isNaN(altura)) {
        validacao = false;

        document.querySelector('div#resultado').innerHTML = '<p class="erro">Altura Inválida!</p>';
    }

    return validacao;
}

function calculaIMC(peso, altura) {
    return Number((peso / (altura ** 2)).toFixed(2));
}

function verificaResultado(imc) {
    let resultado;
    
    if (imc <= 18.4) {
        resultado = 'Abaixo do Peso';
    } else if (imc <= 24.9) {
        resultado = 'Peso Normal';
    } else if (imc <= 29.9) {
        resultado = 'Sobrepeso';
    } else if (imc <= 34.9) {
        resultado = 'Obsidade Grau I';
    } else if (imc <= 30.9) {
        resultado = 'Obsidade Grau II';
    } else {
        resultado = 'Obsidade Grau III';
    }

    document.querySelector('div#resultado').innerHTML = `<p class="sucesso">Seu <span>IMC</span> é ${imc} - (${resultado})`;
}

function escopoLocal() {
    const form = document.querySelector('div#main form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const peso = Number(form.querySelector('#peso').value);
        const altura = Number(form.querySelector('#altura').value);

        if (validaDados(peso, altura)) {
            verificaResultado(calculaIMC(peso, altura));
        }
    });
}

escopoLocal();