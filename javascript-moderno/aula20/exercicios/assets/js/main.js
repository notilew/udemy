function alteraHTML(classe, mensagem) {
    const p = document.createElement('p');

    p.textContent = mensagem;
    p.classList.add(classe);

    const div = document.querySelector('div#resultado');

    div.innerHTML = '';
    div.appendChild(p);
}

function validaPeso(peso) {
    if (peso !== '') {
        let validacao = true;

        if (peso === 0 || Number.isNaN(peso)) validacao = false;

        return validacao;
    } else {
        alert('Não foi possível validar o peso! Peso não detectado.');
    }
}

function validaAltura(altura) {
    if (altura !== '') {
        let validacao = true;

        if (altura === 0 || Number.isNaN(altura)) validacao = false;

        return validacao;
    } else {
        alert('Não foi possível validar a altura! Altura não detectada.');
    }
}

function calculaIMC(peso, altura) {
    return Number((peso / (altura ** 2)).toFixed(2));
}

function verificaResultado(imc) {
    if (imc) {
        const descricoes = [
            'Abaixo do Peso',
            'Peso Normal',
            'Sobrepeso',
            'Obsidade Grau I',
            'Obsidade Grau II',
            'Obsidade Grau III'
        ];

        if (imc <= 18.4) return descricoes[0];
        if (imc <= 24.9) return descricoes[1];
        if (imc <= 29.9) return descricoes[2];
        if (imc <= 34.9) return descricoes[3];
        if (imc <= 39.9) return descricoes[4];
        if (imc >= 40.0) return descricoes[5];
    } else {
        alert('Não foi possível verificar o resultado! IMC não detectado.');
    }
}

function escopoLocal() {
    const form = document.querySelector('div#main form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const peso = Number(e.target.querySelector('#peso').value);
        const altura = Number(e.target.querySelector('#altura').value);

        if (!validaPeso(peso)) {
            alteraHTML('erro', 'Peso Inválido!');

            return;
        };

        if (!validaAltura(altura)) {
            alteraHTML('erro', 'Altura Inválida!');

            return;
        }

        const imc = calculaIMC(peso, altura);
        const resultado = verificaResultado(imc);

        alteraHTML('sucesso', `Seu IMC é ${imc} - (${resultado})`);
    });
}

escopoLocal();