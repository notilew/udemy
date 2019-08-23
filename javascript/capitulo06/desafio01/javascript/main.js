(function(document) {
    'use strict';

    var html = document.querySelector('html');
    var button = document.getElementById('menu');

    html.classList.remove('no-js');
    html.classList.add('js');

    button.addEventListener('click', function(e) {
        e.stopPropagation();

        html.classList.toggle('menu-opened');
    });
})(document);