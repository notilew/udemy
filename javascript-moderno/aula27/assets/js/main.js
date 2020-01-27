const css = getComputedStyle(document.body);
const paragrafos = document.querySelectorAll('#main p')

for (const paragrafo of paragrafos) {
    paragrafo.style.color = 'rgb(255, 255, 255)';
    paragrafo.style.backgroundColor = css.backgroundColor;
}