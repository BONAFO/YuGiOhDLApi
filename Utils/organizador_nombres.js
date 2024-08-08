const clipboardy = require('clipboardy');

// El texto que deseas copiar al portapapeles
const texto = 'Hola, esto es un texto copiado al portapapeles.';

// Copia el texto al portapapeles
clipboardy.writeSync(texto);

console.log('Texto copiado al portapapeles:', texto);