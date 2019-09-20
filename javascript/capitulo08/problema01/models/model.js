(function(window) {
    'use strict';

    window.Aluno = function() {
        var nome = undefined;
        var notas = new Array();
        var media = undefined;

        this.setNome = function(novoNome) {
            if (novoNome) {
                nome = novoNome;
            }
        }

        this.getNome = function() {
            return nome;
        }

        this.setNotas = function(novaNota) {
            if (novaNota) {
                notas.push(novaNota);
            }
        }

        this.getNotas = function() {
            return notas;
        }

        this.setMedia = function(novaMedia) {
            if (novaMedia || novaMedia === 0) {
                media = novaMedia
            }
        }

        this.getMedia = function() {
            return media;
        }

        this.calculaMedia = function() {
            if (notas.length > 0) {
                var notaZerada = notas.some(function(valor) {
                    return parseFloat(valor) === 0;
                });

                if (notaZerada) {
                    this.setMedia(0);
                } else {
                    var media = undefined;
                    var somatorio = notas.reduce(function(somatorio, valorAtual) {
                        return parseFloat(somatorio) + parseFloat(valorAtual);
                    });

                    media = somatorio / notas.length;

                    this.setMedia(Math.round(media).toFixed(0));
                }
            }
        }

        this.defineSituacao = function() {
            return (media >= 0 && media <= 5) ? 'reprovado' : 'aprovado';
        }
    }
})(window);