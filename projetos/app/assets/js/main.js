function calculaDescontoINSSFaixa01(salario, contribuicoes) {
    contribuicoes[0].valor = (salario * contribuicoes[0].aliquota) / 100;
    contribuicoes[0].valor = Number(contribuicoes[0].valor.toFixed(2));

    return contribuicoes;
}

function calculaDescontoINSSFaixa02(salario, contribuicoes) {
    contribuicoes[1].valor = ((salario - contribuicoes[0].valor) * contribuicoes[1].aliquota) / 100;
    contribuicoes[1].valor = Number(contribuicoes[1].valor.toFixed(2));

    return contribuicoes;
}

function calculaDescontoINSSFaixa03(salario, contribuicoes) { }

function calculaDescontoINSSFaixa04(salario, contribuicoes) { }

function calculaDescontoTotalINSS(salario) {
    const contribuicoes = [{
        fracao: 1039.00,
        aliquota: 7.5,
        valor: 0
    }, {
        fracao: 2089.60,
        aliquota: 9.0,
        valor: 0
    }, {
        fracao: 3134.40,
        aliquota: 12.0,
        valor: 0
    }, {
        fracao: 6101.06,
        aliquota: 14.0,
        valor: 0
    }];
    debugger;
    if (salario <= contribuicoes[0].fracao) {
        contribuicoes = calculaDescontoINSSFaixa01(salario, contribuicoes);
    } else if (salario > contribuicoes[0].fracao && salario <= contribuicoes[1].fracao) {
        contribuicoes = calculaDescontoINSSFaixa01(salario, contribuicoes);
        contribuicoes = calculaDescontoINSSFaixa02(salario, contribuicoes);
    } else if (salario > contribuicoes[2].fracao && salario <= contribuicoes[3].fracao) {
        contribuicoes = calculaDescontoINSSFaixa01(salario, contribuicoes);
        contribuicoes = calculaDescontoINSSFaixa02(salario, contribuicoes);
        contribuicoes = calculaDescontoINSSFaixa03(salario, contribuicoes);
    } else {
        contribuicoes = calculaDescontoINSSFaixa01(salario, contribuicoes);
        contribuicoes = calculaDescontoINSSFaixa02(salario, contribuicoes);
        contribuicoes = calculaDescontoINSSFaixa03(salario, contribuicoes);
        contribuicoes = calculaDescontoINSSFaixa04(salario, contribuicoes);
    }

    console.log(contribuicoes);

    return;
}

function validaSalario(salario) {
    let validacao = true;

    if (salario === '' || Number(salario) === 0 || Number.isNaN(salario)) validacao = false;

    return validacao;
}

function escopo() {
    const form = document.querySelector('form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const salario = Number(e.target.querySelector('#salario').value);

        if (!validaSalario()) return;

        const desconto = calculaDescontoTotalINSS(salario);

        alert(desconto);
    });
}

escopo();