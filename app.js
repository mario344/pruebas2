const argv = require('yargs')
    .command('listar', 'Imprime la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;

const { crearArchivo } = require('./multiplicar/multiplicar');

//nolet base = 6;

let argv2 = process.argv;
console.log(argv);
console.log(argv2)

/*
let parametro = argv[2];
let base = parametro.split('=')[1];

console.log(base);

crearArchivo(base)
    .then(archivo => console.log(`Archivo creado ${archivo}`)).catch(e => console.log(e));*/