const retornaHora = (date) => {
    if (date && !(date instanceof Date)) throw new TypeError('parâmetro não é instância de Date()');

    if (!date) date = new Date();

    const hora = date.toLocaleTimeString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });

    return hora;
};

const date = new Date('1989-06-16 07:35:15');

try {
    console.log(retornaHora(20));
} catch (e) {
    console.log(e);
} finally {
    console.log('finalizando código!');
}