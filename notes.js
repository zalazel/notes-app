const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {

    return 'Your Notes ...'
}

const addNote = (title,body) => {

    const notes = loadNotes();

    const duplicateNote = notes.find((note) => note.title === title)

    if(!duplicateNote){

        notes.push({
            title: title,
            body: body
        })

        console.log(chalk.bgGreen.bold('A New Note Added!'))

    }else{
        console.log(chalk.bgRed.bold('Title Is Taken'))
    }
    


        saveNotes(notes);
}

const removeNote = (title) => {

    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title)

    if(notes.length > notesToKeep.length){
        console.log(chalk.bgGreen.bold('Note Removed!'))

    }else{
        console.log(chalk.bgRed.bold('No Note Found!'))

    }

    saveNotes(notesToKeep);


}

const listNotes = () => {

    const notes = loadNotes();
    console.log(chalk.inverse('Your Notes! '))

    notes.forEach((note) =>
    {
        console.log(note.title)
    })

}

const saveNotes = (notes) => {

    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {

    try{

        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);

    } catch(e){

        return [];

    }




}







module.exports = {

    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes


}