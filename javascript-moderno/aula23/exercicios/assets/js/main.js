function formataHoras(horas) {
    if (horas) {
        return (horas < 10) ? `0${horas}` : horas;
    } else {
        alert(`Não foi possível formatar as horas! Horas não detectadas.`);
    }
}

function formataMinutos(minutos) {
    if (minutos) {
        return (minutos < 10) ? `0${minutos}` : minutos;
    } else {
        alert(`Não foi possível formatar os minutos! Minutos não detectados.`);
    }
}

function formataSegundos(segundos) {
    if (segundos) {
        return (segundos < 10) ? `0${segundos}` : segundos;
    } else {
        alert(`Não foi possível formatar os segundos! Segundos não detectados.`);
    }
}

function formataDia(dia) {
    if (dia) {
        return (dia < 10) ? `0${dia}` : dia;
    } else {
        alert(`Não foi possível formatar o dia! Dia não detectada.`);
    }
}

function verificaMes(mes) {
    if (mes !== '') {
        const meses = [`Janeiro`, `Fevereiro`, `Março`, `Abril`, `Maio`, `Junho`, `Julho`, `Agosto`, `Setembro`, `Outubro`, `Novembro`, `Dezembro`];

        switch (mes) {
            case 0: return meses[0];
            case 1: return meses[1];
            case 2: return meses[2];
            case 3: return meses[3];
            case 4: return meses[4];
            case 5: return meses[5];
            case 6: return meses[6];
            case 7: return meses[7];
            case 8: return meses[8];
            case 9: return meses[9];
            case 10: return meses[10];
            case 11: return meses[11];
        }
    } else {
        alert(`Não foi possível verificar o mês! Mês não detectado.`);
    }
}

function verificaDiaDaSemana(dia) {
    if (dia !== '') {
        const dias = [`Domingo`, `Segunda-Feira`, `Terça-Feira`, `Quarta-Feira`, `Quinta-Feira`, `Sexta-Feira`, `Sábado`];

        switch (dia) {
            case 0: return dias[0];
            case 1: return dias[1];
            case 2: return dias[2];
            case 3: return dias[3];
            case 4: return dias[4];
            case 5: return dias[5];
            case 6: return dias[6];
        }
    } else {
        alert(`Não foi possível verificar o dia da semana! Dia da semana não detectado.`);
    }
}

function retornaData() {
    const date = new Date();
    const data = `${verificaDiaDaSemana(date.getDay())}, ${formataDia(date.getDate())} de ${verificaMes(date.getMonth())} de ${date.getFullYear()} ${formataHoras(date.getHours())}:${formataMinutos(date.getMinutes())}:${formataSegundos(date.getSeconds())}`;

    return data;
}

function meuEscopo() {
    const data = retornaData();

    if (data) {
        document.querySelector(`#main > h2`).textContent = data;
    }
}

meuEscopo();