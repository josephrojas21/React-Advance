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

let getEmpleado = (id) => {

    return new Promise((resolve, reject) => {
        let empleadoDB = empelados.find(empleado => empleado.id === id)

        if (!empleadoDB) {
            reject(`no existe un empleado con el ID ${id}`)
        } else {
            resolve(empleadoDB);
        }

    })
}

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => salario.id === empleado.id);

        !salarioDB ? reject(`No se encontro salario para el empleado ${empleado.nomber}`) :
            resolve({
                nombre: empleado.nomber,
                salario: salarioDB.salario
            })
    })
}

getEmpleado(10).then(empleado => {
    return getSalario(empleado);
}).then(reps => {
    console.log(`el salrio de ${reps.nombre} es de ${reps.salario}`);
}).catch(err => {
    console.log(err)
})