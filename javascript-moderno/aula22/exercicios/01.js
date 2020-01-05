function formataNumero(numero) {
    if (numero) {
        return (numero < 10) ? `0${numero}` : numero;
    } else {
        console.log(`Não foi possível formatar o número! Número não detectado.`);
    }
}

function formataData(data) {
    if (data) {
        const dia = formataNumero(data.getDate());
        const mes = formataNumero(data.getMonth() + 1);
        const ano = formataNumero(data.getFullYear());
        const horas = formataNumero(data.getHours());
        const minutos = formataNumero(data.getMinutes());
        const segundos = formataNumero(data.getSeconds());

        return `${ano}-${mes}-${dia}T${horas}:${minutos}:${segundos}`;
    } else {
        console.log(`Não foi possível formatar a data! Data não detectada.`);
    }
}

const data = new Date();

console.log(formataData(data));