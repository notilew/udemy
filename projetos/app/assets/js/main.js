function calculaDescontoINSS(salario) {
    const fracao01 = 1039.00;
    const fracao02 = 2089.60;
    const fracao03 = 3134.40;
    const fracao04 = 6101.06;

    const aliquota01 = 7.5;
    const aliquota02 = 9.0;
    const aliquota03 = 12.0;
    const aliquota04 = 14.0;

    let desconto = 0;

    if (salario <= fracao01) {
        desconto = (salario * aliquota01) / 100;
    }/*  else if (salario > fracao01 && salario <= fracao02) {
        desconto = 
    } */

    return desconto.toFixed(2);
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

        const desconto = calculaDescontoINSS(salario);

        alert(desconto);
    });
}

escopo();