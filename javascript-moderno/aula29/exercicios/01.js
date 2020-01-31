// Refatorando Função max()

/* function max(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

function max(num1, num2) {
    if (num1 > num2) {
        return num1;
    }

    return num2;
}

function max(num1, num2) {
    if (num1 > num2) return num1;

    return num2;
}

function max(num1, num2) {
    return (num1 > num2) ? num1 : num2;
}

const max = (num1, num2) => {
    return (num1 > num2) ? num1 : num2;
}; */

const max = (num1, num2) => (num1 > num2) ? num1 : num2;

console.log(`o maior número é: ${max(150, 100)}`);