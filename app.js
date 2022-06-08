
const { crearArchivo } = require('./helpers/multiplicar');
const colors = require('colors');
const argv = require('./config/yargs')

console.log( argv );
console.log( argv.b );
console.log( argv.base );
console.log( argv.l );
console.log( argv.listar );


// const base = 3;

crearArchivo( argv.b, argv.h, argv.l )
    .then( nombreArchivo => console.log( nombreArchivo.rainbow, 'creado' ) )
    .catch( err => console.log( err ) );

// fs.writeFile(`tabla-${ base }.txt`, salida, ( err ) => {
//     if (err) {
//         throw err;
//     } else {
//         console.log( `archivo tabla-${ base }.txt creado` );
//     }
// }) ;



