/**
 * SetInterval e SetTimeout.
 * Aprendendo a utilizar os temporizadores setInterval e setTimeout.
 */

// setInterval
setInterval(() => {
    const date = new Date();

    console.log(date.toLocaleTimeString('pt-br', { hour12: false }));
}, 1000);