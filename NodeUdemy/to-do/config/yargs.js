const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hcer'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', { descripcion })
    .command('actualizar', 'Actualiza el estado completo de una tarea', { descripcion, completado })
    .command('borrar', 'Borra la tarea indicada', { descripcion })
    .help()
    .argv;

module.exports = {
    argv
}