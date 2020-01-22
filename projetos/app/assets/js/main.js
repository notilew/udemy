function calculaDescontoINSSFaixa01(salario, contribuicoes) {
    if (salario < contribuicoes[0].fracao) {
        contribuicoes[0].sobra = salario;
        contribuicoes[0].valor = (salario * contribuicoes[0].aliquota) / 100;
    } else {
        contribuicoes[0].valor = (contribuicoes[0].fracao * contribuicoes[0].aliquota) / 100;
    }

    contribuicoes[0].valor = Number(contribuicoes[0].valor.toFixed(2));
    contribuicoes[0].sobra = Number(contribuicoes[0].sobra.toFixed(2));

    return contribuicoes;
}

function calculaDescontoINSSFaixa02(salario, contribuicoes) {
    if (salario < contribuicoes[1].fracao) {
        contribuicoes[1].sobra = salario - contribuicoes[0].fracao;
        contribuicoes[1].valor = ((salario - contribuicoes[0].fracao) * contribuicoes[1].aliquota) / 100;
    } else {
        contribuicoes[1].valor = ((contribuicoes[1].fracao - contribuicoes[0].fracao) * contribuicoes[1].aliquota) / 100;
    }

    contribuicoes[1].valor = Number(contribuicoes[1].valor.toFixed(2));
    contribuicoes[1].sobra = Number(contribuicoes[1].sobra.toFixed(2));

    return contribuicoes;
}

function calculaDescontoINSSFaixa03(salario, contribuicoes) {
    if (salario < contribuicoes[2].fracao) {
        contribuicoes[2].sobra = salario - contribuicoes[1].fracao;
        contribuicoes[2].valor = ((salario - contribuicoes[1].fracao) * contribuicoes[2].aliquota) / 100;
    } else {
        contribuicoes[2].valor = ((contribuicoes[2].fracao - contribuicoes[1].fracao) * contribuicoes[2].aliquota) / 100;
    }

    contribuicoes[2].valor = Number(contribuicoes[2].valor.toFixed(2));
    contribuicoes[2].sobra = Number(contribuicoes[2].sobra.toFixed(2));

    return contribuicoes;
}

function calculaDescontoINSSFaixa04(salario, contribuicoes) {
    if (salario < contribuicoes[3].fracao) {
        contribuicoes[3].sobra = salario - contribuicoes[2].fracao;
        contribuicoes[3].valor = ((salario - contribuicoes[2].fracao) * contribuicoes[3].aliquota) / 100;
    } else {
        contribuicoes[3].valor = ((contribuicoes[3].fracao - contribuicoes[2].fracao) * contribuicoes[3].aliquota) / 100;
    }

    contribuicoes[3].valor = Number(contribuicoes[3].valor.toFixed(2));
    contribuicoes[3].sobra = Number(contribuicoes[3].sobra.toFixed(2));

    return contribuicoes;
}

function insereLinhasTabela(desconto, contribuicoes) {
    let i = 0;
    const tbody = document.querySelector('table tbody');

    tbody.innerHTML = '';
    
    while (contribuicoes[i].valor > 0 && i < 4) {
        const tr = document.createElement('tr');

        const fracao = document.createElement('td');
        const aliquota = document.createElement('td');
        const valor = document.createElement('td');

        if (contribuicoes[i].sobra > 0) {
            fracao.textContent = contribuicoes[i].sobra;
        } else {
            fracao.textContent = contribuicoes[i].fracao;
        }
        
        aliquota.textContent = `${contribuicoes[i].aliquota} %`;
        valor.textContent = contribuicoes[i].valor;

        tr.appendChild(fracao);
        tr.appendChild(aliquota);
        tr.appendChild(valor);

        if (i === 0) {
            const total = document.createElement('td');

            total.textContent = desconto;
            total.rowSpan = 4;

            tr.appendChild(total);
        }

        tbody.appendChild(tr);

        i++;
    }
}

function calculaDescontoTotalINSS(salario) {
    let desconto = 0;
    let contribuicoes = [{
        fracao: 1039.00,
        aliquota: 7.5,
        valor: 0,
        sobra: 0
    }, {
        fracao: 2089.60,
        aliquota: 9.0,
        valor: 0,
        sobra: 0
    }, {
        fracao: 3134.40,
        aliquota: 12.0,
        valor: 0,
        sobra: 0
    }, {
        fracao: 6101.06,
        aliquota: 14.0,
        valor: 0,
        sobra: 0
    }];

    if (salario <= contribuicoes[0].fracao) {
        contribuicoes = calculaDescontoINSSFaixa01(salario, contribuicoes);
    } else if (salario > contribuicoes[0].fracao && salario <= contribuicoes[1].fracao) {
        contribuicoes = calculaDescontoINSSFaixa01(salario, contribuicoes);
        contribuicoes = calculaDescontoINSSFaixa02(salario, contribuicoes);
    } else if (salario > contribuicoes[1].fracao && salario <= contribuicoes[2].fracao) {
        contribuicoes = calculaDescontoINSSFaixa01(salario, contribuicoes);
        contribuicoes = calculaDescontoINSSFaixa02(salario, contribuicoes);
        contribuicoes = calculaDescontoINSSFaixa03(salario, contribuicoes);
    } else {
        contribuicoes = calculaDescontoINSSFaixa01(salario, contribuicoes);
        contribuicoes = calculaDescontoINSSFaixa02(salario, contribuicoes);
        contribuicoes = calculaDescontoINSSFaixa03(salario, contribuicoes);
        contribuicoes = calculaDescontoINSSFaixa04(salario, contribuicoes);
    }

    for (let i = 0; i < contribuicoes.length; i++) {
        desconto += contribuicoes[i].valor;
    }
    
    desconto = Number(desconto.toFixed(2));
    
    insereLinhasTabela(desconto, contribuicoes);
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

        calculaDescontoTotalINSS(salario);
    });
}

escopo();