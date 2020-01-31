// Refatorando Função landscape()

/* const landscape = (width, height) => (width > height) ? true : false; */

const orientation = (width, height) => (width >= height);

console.log(`a orientação da imagem é ${(orientation(1080, 1920)) ? 'paisagem' : 'retrato'}`);