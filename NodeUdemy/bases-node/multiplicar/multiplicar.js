const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    for (let i = 1; i <= limite; i++) {
        console.log(`${base}* ${i} = ${base*i}`);
    }

}



let crearArchivo = async(base, limite = 10) => {

    return new Promise((resolve, reject) => {
        if (!Number(base) && !Number(limite)) {
            reject(`No es un numero ${base} y ${limite}`);
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base}* ${i} = ${base*i}\n`;

        }

        fs.writeFile(`archivos/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`)

        })

    })

}

module.exports = {
    crearArchivo,
    listarTabla
}