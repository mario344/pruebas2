const { rejects } = require('assert');
const fs = require('fs');



let crearArchivo = (base) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('Debe ser numeor valido');
            return;
        }

        let data = '';
        for (i = 1; i <= 10; i++) {

            data += ` ${base} * ${i} = ${i *base} \n`;
        }


        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`se salvo el archivo tabla-${base}.txt`)

        });
    })

}

module.exports = {
    crearArchivo
}