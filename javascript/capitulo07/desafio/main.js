(function(window, document) {
    'use strict';

    window.addEventListener('load', function() {
        var path = window.sorteia() + '.jpg';

        if (path) {
            var body = document.querySelector('body');

            body.style.backgroundImage = 'url(' + path + ')';
            body.style.backgroundRepeat = 'no-repeat';
            body.style.backgroundPosition = 'center';
        }
    });
})(window, document);