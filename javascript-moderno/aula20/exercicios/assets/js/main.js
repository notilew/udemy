function alteraHTML(classe, mensagem) {
    const p = document.createElement('p');

    p.textContent = mensagem;
    p.classList.add(classe);

    const div = document.querySelector('div#resultado');
    
    div.innerHTML = '';
    div.appendChild(p);
}

function validaDados(peso, altura) {
    let validacao = true;

    if (peso === 0 || Number.isNaN(peso)) {
        validacao = false;

        alteraHTML('erro', 'Peso Inválido!');
    } else if (altura === 0 || Number.isNaN(altura)) {
        validacao = false;

        alteraHTML('erro', 'Altura Inválida!');
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

    alteraHTML('sucesso', `Seu IMC é ${imc} - (${resultado})`);
}

function escopoLocal() {
    const form = document.querySelector('div#main form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const peso = Number(e.target.querySelector('#peso').value);
        const altura = Number(e.target.querySelector('#altura').value);

        if (validaDados(peso, altura)) {
            verificaResultado(calculaIMC(peso, altura));
        }
    });
}

escopoLocal();