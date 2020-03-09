// escopo de função com let.

let nome = 'wellington';

if (true) {
    let nome = 'palloma';

    console.log(nome);

    if (true) {
        let nome = 'josé';

        console.log(nome);
    }
}

console.log(nome);