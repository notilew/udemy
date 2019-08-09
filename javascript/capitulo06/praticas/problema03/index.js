(function(document) {
    'use strict';

    var p = document.querySelector('p');
    var span = document.querySelector('p span');
    var textarea = document.querySelector('#mensagem');
    var form = document.querySelector('form');

    p.style.display = 'block';
    span.textContent = textarea.maxLength;

    textarea.addEventListener('input', function(e) {
        e.stopPropagation();

        var restante = textarea.maxLength - this.value.length;

        span.textContent = restante;

        if (restante <= 10) {
            span.className = 'alerta';
        } else {
            span.classList.remove('alerta');
        }
    });

    form.addEventListener('submit', function(e) {
        e.stopPropagation();

        if (e.target.localName === 'form') {
            e.preventDefault();

            if (textarea.textLength > 0) {
                alert('Mensagem Enviada...');
            } else {
                alert('Mensagem não Envida... Preencha o formulário');
            }
        }
    });
})(document);