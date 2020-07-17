setTimeout(() => {
    console.log('hola mundo')
}, 3000);

let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: 'fernando',
        id
    }

    if (id == 20) {
        callback(`El susuairo con id ${id}, no existe en la bd`)
    } else {
        callback(null, usuario);
    }

}

getUsuarioById(20, (err, usuario) => {

    if (err) {
        return console.log(err)
    }
    console.log('usuario de base de datp', usuario)
})