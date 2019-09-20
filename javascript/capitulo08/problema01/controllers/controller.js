(function(window, document) {
    'use strict';

    window.recuperaNotasDosAlunos = function() {
        var nodeListAlunos = document.querySelectorAll('table tbody .alunos');

        if (nodeListAlunos) {
            nodeListAlunos.forEach(function(node) {
                var aluno = new window.Aluno();

                aluno.setNome(node.querySelector('.nome').innerText);

                var nodeListNotas = node.querySelectorAll('.notas');

                nodeListNotas.forEach(function(node) {
                    aluno.setNotas(node.innerText);
                });

                aluno.calculaMedia();

                node.querySelector('.media').innerText = aluno.getMedia();
                node.querySelector('.situacao').innerText = aluno.defineSituacao();
            });
        }
    }
})(window, document);