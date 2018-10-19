const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor del parámetro base ${base} no es un número.`);
            return;
        }
        if (!Number(limite)) {
            reject(`El valor del parámetro límite ${limite} no es un número.`);
            return;
        }

        console.log(`TABLA DEL ${base}`.green);

        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${base * i}`);
        }
    });
};

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor del parámetro base ${base} no es un número.`);
            return;
        }
        if (!Number(limite)) {
            reject(`El valor del parámetro límite ${limite} no es un número.`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`.green);
        });

    });
};

module.exports = {
    crearArchivo,
    listarTabla
}