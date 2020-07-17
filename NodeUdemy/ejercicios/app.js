let Deadpool = {
    nombre: 'wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre: function() {
        return `${ this.nombre} ${ this.apellido } - poder: ${this.poder}`
    }
}

let { nombre: nuevoNombre, apellido, poder } = Deadpool;

console.log(nuevoNombre, apellido, poder)


const sumar = (a, b) => {
    return a + b
}


const saludar = () => 'hola mundo'
console.log(saludar())