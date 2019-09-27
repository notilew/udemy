(function(window, document) {
    'use strict';

    window.addEventListener('load', function() {
        window.aluno1 = {
            nome: 'wellington felix',
            notas: [5, 2.5, 3, 0.5],
            media: undefined,
            situacao: undefined
        }

        window.aluno2 = {
            nome: 'palloma felix',
            notas: [5, 2.5, 3, 0.5],
            media: undefined,
            situacao: undefined
        }

        window.aluno3 = {
            nome: 'maria felix',
            notas: [5, 10, 8, 1.5],
            media: undefined,
            situacao: undefined
        }

        for (var i = 1; i <= 3; i++) {
            var aluno = window['aluno' + i];
            var notaZerada = aluno.notas.some(function(nota) {
                return (nota >= 0 && nota <= 0.9);
            });

            aluno.media = calculaMedia.apply(this, aluno.notas);

            if (notaZerada) {
                aluno.situacao = 'reprovado';
            } else {
                aluno.situacao = 'aprovado';
            }

            console.log(aluno);
        }
    });

    function calculaMedia() {
        if (arguments.length > 0) {
            var media = 0;
            var somatorio = 0;

            for (var i = 0; i < arguments.length; i++) {
                somatorio += arguments[i];
            }

            media = somatorio / arguments.length;

            return parseFloat(media.toFixed(1));
        }
    }
})(window, document);