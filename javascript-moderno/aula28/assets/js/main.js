const css = getComputedStyle(document.body);
const paragrafos = document.querySelectorAll('#main p')

for (const paragrafo in paragrafos) {
    console.log(paragrafo);
}