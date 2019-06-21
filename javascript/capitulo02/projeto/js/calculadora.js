var insereValorNoResultado = function(valor) {

};

var pegaValorDoBotao = function(valor) {
    debugger;
    if (isNaN(valor)) {
        operador = valor;

        switch (operador) {
            case '+':
                break;

            case '-':
                break;

            case '*':
                break;

            case '/':
                break;
        }
    } else {
        if (!bandeira) {
            n1 = parseInt(valor);

            bandeira = true;
        } else {
            n2 = parseInt(valor);
        }
    }
};

var n1 = undefined;
var n2 = undefined;
var operador = undefined;
var resultado = undefined;
var bandeira = false;