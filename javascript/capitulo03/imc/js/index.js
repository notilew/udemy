(function(window) {
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

  function calculaIMC(peso, altura, callback) {
    var imc = peso / (altura * altura);

    if (callback && typeof callback === 'function') {
      return classificaIMC(imc);
    }

    return imc;
  }

  var peso = 155;
  var altura = 1.75;
  var resultado = calculaIMC(peso, altura, classificaIMC);

  window.document.getElementById('peso').innerHTML = peso;
  window.document.getElementById('altura').innerHTML = altura;
  window.document.getElementById('resultado').innerHTML = resultado;
})(window);