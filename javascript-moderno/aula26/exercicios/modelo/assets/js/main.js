function insereElementoNoDOM(elemento) {
    let div = document.querySelector('div#main div');

    if (!div) {
        const main = document.querySelector('div#main');

        div = document.createElement('div');
        main.appendChild(div);
    } else {
        div.appendChild(elemento);
    }
}

function criaElemento(tag, text) {
    const texto = document.createTextNode(text);
    const elemento = document.createElement(tag);

    elemento.appendChild(texto);

    return elemento;
}

function escopo() {
    const elementos = [
        { tag: 'p', text: 'frase 1' },
        { tag: 'div', text: 'frase 2' },
        { tag: 'footer', text: 'frase 3' },
        { tag: 'section', text: 'frase 4' },
    ];

    insereElementoNoDOM();

    for (let i = 0; i < elementos.length; i++) {
        const { tag, text } = elementos[i];

        const elemento = criaElemento(tag, text);

        insereElementoNoDOM(elemento);
    }
}

escopo();