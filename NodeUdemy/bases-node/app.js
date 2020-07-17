//requireds
const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');



let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(res => console.log(`tabla creada : ${res.green}`))
            .catch(e => console.log(e))

        break;
    default:
        console.log('comando no reconocido')
        break;
}