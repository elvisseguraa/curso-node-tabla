
const colors = require('colors');

const listar = (base = 5) => {

    let salida = '';

    for (let i = 1; i <= 10; i++) {
        salida += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
    }

    if (listar) {
        console.log('====================='.green);
        console.log('TABLA DEL: '.green + colors.blue(base));
        console.log('====================='.green);
        console.log(salida);
        console.log('====================='.rainbow)
    }

}

listar(10);