const valdator = require('./node_modules/validator')
const notes = require('./notes');
const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
const { argv } = require('yargs');
const { addNote } = require('./notes');

//Seting Version of yargs

yargs.version('1.1.0');

//Add command

yargs.command({

    command: 'add',
    describe: 'Add a Note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
                },
        body:{
            describe: 'body description',
            demandOption: true,
            type: 'srting'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})

//Remove command

yargs.command({

    command: 'remove',
    describe: 'remove a Note',
    builder:{
        title:{
            describe:'Remove a Note',
            demandOption:true,
            type:'string'
        }
    },
    handler(){
        notes.removeNote(argv.title)
        }
})

//List command

yargs.command({

    command: 'list',
    describe: 'list a Note',
    handler(){
        notes.listNotes()
        }
})

//Read

yargs.command({

    command: 'read',
    describe: 'read a Note',
    handler(){
        console.log('reading a new note!')
    }
})


// console.log(process.argv);
console.log(yargs.argv);