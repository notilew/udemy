function meuEscopo() {
    const form = document.querySelector('.form');

    form.onsubmit = function(evento) {
        evento.preventDefault();
        
        alert('teste');
        console.log('enviando...');
    }
}

meuEscopo();