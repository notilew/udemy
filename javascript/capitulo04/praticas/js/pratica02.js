(function() {
    'use strict';

    var vendas = window.document.querySelectorAll('table tbody .vendas');

    for (var i = 0; i < vendas.length; i++) {
        var venda = vendas[i];
        var valores = venda.querySelectorAll('td');
        var quantidade = valores[1].textContent;
        var valorUnitario = valores[2].textContent;
        var percentualDeComissao = valores[5].textContent;

        var valorTotal = calculaValorTotal(quantidade, valorUnitario);

        venda.querySelector('.venda-valor-tot').textContent = valorTotal.toFixed(2);

        var valorDeComissao = calculaValorDeComissao(percentualDeComissao, valorTotal);

        venda.querySelector('.venda-valor-receber').textContent = valorDeComissao.toFixed(2);
    }

    function calculaValorTotal(quantidade, valorUnitario) {
        return parseInt(quantidade) * parseFloat(valorUnitario);
    }

    function calculaValorDeComissao(percentualDeComissao, valorTotal) {
        var percentual = parseInt(percentualDeComissao.replace('%', ''));

        return (valorTotal * percentual) / 100;
    }
})();