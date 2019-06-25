var insereValorNoResultado = function(valor) {
  if (valor != 'ac') {
    str = str + valor;

    document.getElementById('resultado').value = str;
  }
};

var calculaResultado = function() {
  if (n1 && n2) {
    switch (operador) {
      case '+':
        resultado = n1 + n2;
        break;
      case '-':
        resultado = n1 - n2;
        break;
      case '*':
        resultado = n1 * n2;
        break;
      case '/':
        resultado = n1 / n2;
        break;
    }
  }

  insereValorNoResultado(resultado);
};

var pegaValorDoBotao = function(valor) {
  insereValorNoResultado(valor);
  //debugger;
  if (isNaN(valor)) {
    switch (valor) {
      case '+':
      case '-':
      case '*':
      case '/':
        operador = valor;
        break;

      case 'ac':
        n1 = undefined;
        n2 = undefined;
        resultado = undefined;

        operador = undefined;
        str = '';

        document.getElementById('resultado').value = 0;
        break;

      case '=':
        calculaResultado();
        break;
    }
  } else {
    if (typeof n1 == 'undefined') {
      n1 = parseInt(valor);
    } else {
      n2 = parseInt(valor);
    }
  }
};

var n1 = undefined;
var n2 = undefined;
var resultado = undefined;

var str = undefined;
var operador = undefined;

resultado = 0;

str = '';