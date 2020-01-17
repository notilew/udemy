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

function criaElemento(objeto) {
    const elemento = document.createElement(objeto.tag);

    elemento.textContent = objeto.textContent.toUpperCase()

    return elemento;
}

function escopo() {
    const elementos = [
        { tag: 'p', textContent: 'frase 1' },
        { tag: 'div', textContent: 'frase 2' },
        { tag: 'footer', textContent: 'frase 3' },
        { tag: 'section', textContent: 'frase 4' },
    ];

    insereElementoNoDOM();

    for (let i = 0; i < elementos.length; i++) {
        const elemento = criaElemento(elementos[i]);

        insereElementoNoDOM(elemento);
    }
}

escopo();