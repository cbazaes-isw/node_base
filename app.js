const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./mutiplicar/multiplicar');

let commando = argv._[0];
switch (commando) {
    case 'listar':

        listarTabla(argv.base, argv.limite)
            .then(() => {})
            .catch(e => console.error(e));
        break;

    case 'crear':

        crearArchivo(argv.base, argv.limite)
            .then((archivo) => console.log(`Archivo creado ${archivo}`))
            .catch(e => console.error(e));
        break;

    default:

        console.log('Commando no reconocido');
        break;
}