
const fs = require('fs'); // acceso al file-system
const colors = require('colors');

const crearArchivo = async ( base = 5, hasta = 10, listar = false ) => {

    try {

        let salida = '', consola = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${ base } x ${ i } = ${ base * i }\n` ;
            consola += `${ base } ${ 'x'.green } ${ i } ${ '='.green } ${ base * i }\n` ;
        }

        if (listar) {
            console.log('====================='.green);
            console.log('TABLA DEL: '.green + colors.blue( base ) );
            console.log('====================='.green);
            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida ) ;

        return `tabla-${ base }.txt` ;
        
    } catch ( err ) {
        throw err;
    }

}


// const crearArchivo = ( base = 5 ) => {

//     return new Promise( ( resolve, reject) => {

//         console.log('=====================');
//         console.log(`   TABLA DEL: ${ base }`);
//         console.log('=====================');
        
//         try {
    
//             let salida = '';
    
//             for (let i = 1; i <= 10; i++) {
//                 salida += `${ base } x ${ i } = ${ base * i }\n` ;
//             }
    
//             console.log(salida);
    
//             fs.writeFileSync(`tabla-${ base }.txt`, salida ) ;
    
//             resolve(`tabla-${ base }.txt`);
            
//         } catch ( err ) {
//             reject( err );
//         }

//     })

// }

module.exports = { 
    crearArchivo
 };