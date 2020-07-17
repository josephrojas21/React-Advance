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


let getEmpleado = async(id) => {

    let empleadoDB = empelados.find(empleado => empleado.id === id)

    if (!empleadoDB) {
        throw new Error(`no existe un empleado con el ID ${id}`)
    } else {
        return empleadoDB;
    }

}

let getSalario = async(empleado) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id);

    if (!salarioDB) {
        throw new Error(`No se encontro salario para el empleado ${empleado.nomber}`)
    } else {
        return {
            nombre: empleado.nomber,
            salario: salarioDB.salario
        };
    }


}

let getInfo = async(id) => {

    let empleado = await getEmpleado(id);
    let resp = await getSalario(empleado);

    return `el salrio de ${resp.nombre} es de ${resp.salario}`
}

getInfo(2)
    .then(mensaje => console.log(mensaje))
    .catch(err => console.log(err))