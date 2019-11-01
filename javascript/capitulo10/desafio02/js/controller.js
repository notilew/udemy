((window, document) => {
    'use strict';

    var timestamp = 0;

    var cronometro = document.querySelector('#cronometro');
    var iniciar = document.querySelector('#iniciar');
    var pausar = document.querySelector('#pausar');
    var resetar = document.querySelector('#resetar');

    window.addEventListener('load', () => {
        cronometro.value = '00:00:00:000';
    });

    iniciar.addEventListener('click', () => {
        timestamp = Date.now();
        iniciarCronometro();
    });

    function iniciarCronometro() {
        window.setInterval(() => {
            cronometro.value = retornaTempoFormatado((Date.now() - timestamp));
        }, 1);
    }

    function retornaTempoFormatado(timestamp) {
        var tempo = new Date(timestamp);

        var horas = formataTempo(tempo.getHours());
        var minutos = formataTempo(tempo.getMinutes());
        var segundos = formataTempo(tempo.getSeconds());
        var milisegundos = formataTempo(tempo.getMilliseconds());

        return horas + ':' + minutos + ':' + segundos + ':' + milisegundos;
    }

    function formataTempo(tempo) {
        return (tempo < 10) ? '0' + tempo : tempo;
    }
})(window, document);