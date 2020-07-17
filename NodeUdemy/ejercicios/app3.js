let empelados = [{
        id: 1,
        nomber: 'fernando'
    },
    {
        id: 2,
        nomber: 'andres'
    },
    {
        id: 3,
        nomber: 'jose'
    }
]

let salarios = [{
        id: 1,
        salario: 100
    },
    {
        id: 2,
        salario: 200
    }
];


let getEmpleado = (id, callback) => {

    let empleadoDB = empelados.find(empleado => empleado.id === id)

    if (!empleadoDB) {
        callback(`no existe un empleado con el ID ${id}`)
    } else {
        callback(null, empleadoDB);
    }

}
let getSalario = (empleado, callback) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id);

    !salarioDB ? callback(`No se encontro salario para el empleado ${empleado.nomber}`) :
        callback(null, {
            nombre: empleado.nomber,
            salario: salarioDB.salario
        })
}


getEmpleado(3, (err, empleado) => {
    if (err) {
        return console.log(err)
    }
    getSalario(empleado, (err, resp) => {
        err ? console.log(err) : console.log(`El salario de ${resp.nombre}es de ${resp.salario}`)
    })

})