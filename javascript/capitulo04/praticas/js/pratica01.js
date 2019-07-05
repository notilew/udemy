(function(document) {
    'use strict';

    function classificaIMC(imc) {
        if (imc <= 16.9) {
            return 'muito abaixo do peso';
        } else if (imc <= 18.4) {
            return 'abaixo do peso';
        } else if (imc <= 24.9) {
            return 'peso normal';
        } else if (imc <= 29.9) {
            return 'acima do peso';
        } else if (imc <= 34.9) {
            return 'obesidade grau 1';
        } else if (imc <= 40) {
            return 'obesidade grau 2';
        } else {
            return 'obesidade grau 3';
        }
    }

    function calculaIMC(peso, altura) {
        var imc = peso / Math.pow(altura, 2);

        return imc.toFixed(1);
    }

    var peso = document.getElementById('peso').value;
    var altura = document.getElementById('altura').value;

    document.getElementById('imc').value = calculaIMC(parseFloat(peso), parseFloat(altura));
    document.getElementById('classificacao').textContent = classificaIMC(imc);
})(document);