function insereElementoNoDOM(elemento) {
    debugger;
    if (elemento) {
        const main = document.querySelector('div#main');
        let div = document.querySelector('div#main > div');

        if (!div) {
            div = criaElemento({ tag: 'div', textContent: '' });
        }

        div.appendChild(elemento);
    }
}

function criaElemento(objeto, posicao) {debugger;
    let div;

    if (posicao === 0) {
        div = document.createElement('div');
    }

    const elemento = document.createElement(objeto.tag);
    elemento.textContent = objeto.textContent.toUpperCase()

    div.appendChild(elemento);

    return div;
}

function escopo() {
    const elementos = [
        {
            tag: 'p',
            textContent: 'frase 1'
        },
        {
            tag: 'div',
            textContent: 'frase 2'
        },
        {
            tag: 'footer',
            textContent: 'frase 3'
        },
        {
            tag: 'section',
            textContent: 'frase 4'
        },
    ];

    for (let i = 0; i < elementos.length; i++) {
        console.log(criaElemento(elementos[i], i));
    }
}

escopo();