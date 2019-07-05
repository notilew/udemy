(function(window) {
    'use strict';

    function calculaMedia() {
        var soma = 0;

        for (var i = 0; i < arguments[0].length; i++) {
            soma += arguments[0][i];
        }

        return soma / arguments[0].length;
    }

    var notas = [2, 4];
    var media = calculaMedia(notas);

    window.document.getElementById('media').innerHTML = 'A média dos alunos é: ' + media;

    console.log('a média é: ', media);
})(window);