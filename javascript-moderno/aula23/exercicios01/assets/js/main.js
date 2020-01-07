function meuEscopo() {
    const data = new Date();
    const h2 = document.querySelector('#main > h2');
    const configuracoes = {
        dateStyle: 'full',
        timeStyle: 'short'
    };

    h2.innerHTML = data.toLocaleDateString('pt-br', configuracoes);
}

meuEscopo();