const argv = require('yargs')
    .usage('USO: $0 <comando> <entidad> [opciones]')
    .demandCommand(2)
    .command('create', 'Insertar un personaje nuevo')
    .command('read', 'Leer un personaje nuevo')
    .command('update', 'Actualizar un personaje nuevo')
    .command('delete', 'Eliminar un personaje nuevo')
    .option('id', {
        type: 'number',
        demandOption: false,
        describe: 'Id del personaje'
    })
    .option('n', {
        alias: 'name',
        type: 'string',
        demandOption: false,
        describe: 'Nombre del personaje'
    })
    .option('g', {
        alias: 'gender',
        type: 'string',
        demandOption: false,
        describe: 'Genero del personaje'
    })
    
    .option('i', {
        alias: 'image',
        type: 'string',
        demandOption: false,
        describe: 'Imagen del personaje'  
    })
    .option('u', {
        alias: 'url',
        type: 'string',
        demandOption: false,
        describe: 'url del personaje'  
    })
    .option('c', {
        alias: 'image',
        type: 'string',
        demandOption: false,
        describe: 'Creacion del personaje'  
    })
    .check((argv, options) => {
        if (argv.id != null && isNaN(argv.id))
            throw 'El valor del id tiene que ser un numero'
        return true;
    })
    .argv;

module.exports = argv;