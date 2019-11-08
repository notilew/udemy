((window, document) => {
    'use strict';

    const UMA_HORA = 60 * 60 * 1000;
    const UM_MINUTO = 60 * 1000;
    const UM_SEGUNDO = 10 * 100;

    var timestampInicio = 0;
    var timestampPausa = 0;
    var timestampDecorrido = 0;
    var iniciado = false;
    var id = undefined;

    var cronometro = document.querySelector('#cronometro');
    var iniciar = document.querySelector('#iniciar');
    var pausar = document.querySelector('#pausar');
    var resetar = document.querySelector('#resetar');

    window.addEventListener('load', () => {
        cronometro.value = '00:00:00:000';
    });

    iniciar.addEventListener('click', () => {
        if (!iniciado) {
            iniciado = true;
            timestampInicio = Date.now();

            pausar.textContent = 'Pausar';

            iniciarCronometro();
        }
    });

    pausar.addEventListener('click', (e) => {
        if (cronometro.value !== '00:00:00:000') {
            if (iniciado) {
                iniciado = false;
                timestampPausa = Date.now();
                timestampDecorrido += timestampPausa - timestampInicio;

                e.target.textContent = 'Continuar';

                window.clearInterval(id);
            } else {
                iniciado = true;
                timestampInicio = Date.now();

                e.target.textContent = 'Pausar';

                iniciarCronometro();
            }
        }
    });

    resetar.addEventListener('click', () => {
        timestampInicio = 0;
        timestampPausa = 0;
        timestampDecorrido = 0;
        iniciado = false;

        pausar.textContent = 'Pausar';

        window.clearInterval(id);

        cronometro.value = '00:00:00:000';
    });

    function iniciarCronometro() {
        id = window.setInterval(() => {
            var timestampAtual = Date.now();
            var diff = timestampAtual - timestampInicio;
            cronometro.value = retornaTempoFormatado(diff + timestampDecorrido);
        }, 1);
    }

    function retornaTempoFormatado(tempo) {
        if (tempo < UM_SEGUNDO) {
            return '00:00:00:' + tempo;
        } else if (tempo < UM_MINUTO) {
            var segundos = formataTempo(window.parseInt(tempo / UM_SEGUNDO));
            var milisegundos = tempo - (segundos * UM_SEGUNDO);

            return '00:00:' + segundos + ':' + milisegundos;
        } else if (tempo < UMA_HORA) {
            var minutos = formataTempo(window.parseInt(tempo / UM_MINUTO));
            var segundos = formataTempo(window.parseInt(tempo / UM_SEGUNDO - (minutos * 60)));
            var milisegundos = tempo - (segundos * UM_SEGUNDO) - (minutos * 60 * UM_SEGUNDO);

            return '00:' + minutos + ':' + segundos + ':' + milisegundos;
        } else {
            var horas = formataTempo(window.parseInt(tempo / UMA_HORA));
            var minutos = formataTempo(window.parseInt(tempo / UM_MINUTO) - 60);
            var segundos = formataTempo(window.parseInt(tempo / UM_SEGUNDO) - (minutos * 60));
            var milisegundos = tempo - (segundos * UM_SEGUNDO) - (minutos * 60 * UM_SEGUNDO);

            return horas + ':' + minutos + ':' + segundos + ':' + milisegundos;
        }
    }

    function formataTempo(tempo) {
        return (tempo < 10) ? '0' + tempo : tempo;
    }
})(window, document);