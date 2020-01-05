/**
 * Switch Case.
 * Aprendendo a utilizar a estrutura condicional.
 */

function verificaDiaDaSemana(dia) {
    if (dia !== '') {
        const dias = [
            'domingo',
            'segunda-feira',
            'terça-feira',
            'quarta-feira',
            'quinta-feira',
            'sexta-feira',
            'sábado',
            'não-encontrado'
        ];

        switch (dia) {
            case 0: return dias[0];
            case 1: return dias[1];
            case 2: return dias[2];
            case 3: return dias[3];
            case 4: return dias[4];
            case 5: return dias[5];
            case 6: return dias[6];

            default: return dias[7];
        }
    } else {
        console.log('dia da semana não enviado!');
    }
}

const data = new Date('1989-06-16T07:30:00.000Z');

console.log(verificaDiaDaSemana(data.getDay()));

/**
 * Observações:
 */