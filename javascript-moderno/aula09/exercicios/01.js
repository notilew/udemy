const nome = prompt('Informe o seu nome completo:');

if (nome.length > 0) {
    const confirmacao = confirm('Confirma a adição do seu nome no sistema?');

    if (confirmacao) {
        document.body.innerHTML +=
            `<p>O nome é: <strong>${nome}</strong></p>`;
        document.body.innerHTML +=
            `<p>O nome tem <strong>${nome.length}</strong> letras</p>`;
        document.body.innerHTML +=
            `<p>A segunda letra do nome é: <strong>${nome[1]}</strong></p>`;
        document.body.innerHTML +=
            `<p>Qual é o primeiro índice da letra "a" no nome? <strong>${nome.indexOf('a')}</strong></p>`;
        document.body.innerHTML +=
            `<p>Qual é o último índice da letra "a" no nome? <strong>${nome.lastIndexOf('a')}</strong></p>`;
        document.body.innerHTML +=
            `<p>As últimas 3 letras do seu nome são: <strong>${nome.slice(-3)}</strong></p>`;
        document.body.innerHTML +=
            `<p>As palavras so nome são: <strong>${nome.split(' ')}</strong></p>`;
        document.body.innerHTML +=
            `<p>O nome com letras maiúsculas: <strong>${nome.toUpperCase()}</strong></p>`;
        document.body.innerHTML +=
            `<p>O nome com letras minúsculas: <strong>${nome.toLowerCase()}</strong></p>`;
    } else {
        alert('Esperamos que você confirme a adição do seu nome no sistema da próxima vez!');
    }
} else {
    alert('O nome não foi informado!');
}