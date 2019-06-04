const fs = require('fs')
const chalk = require('chalk')

//------------------------------------------------------------------------------
const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })

        saveNotes(notes)
        console.log(chalk.bgGreen('New note added'))
    } else {
        console.log(chalk.bgRed('Note title is taken'))
    }
}
//------------------------------------------------------------------------------
const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)

    if (notesToKeep.length === notes.length) {
        console.log(chalk.bgRed(title + " NOT FOUND"))
    } else if (notesToKeep.length !== notes.length) {
        console.log(chalk.bgGreen(title + " WAS REMOVED"))
        saveNotes(notesToKeep)
    }
}
//------------------------------------------------------------------------------
const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.bgBlue('YOUR NOTES'))
    notes.forEach((note) => console.log(note.title))
}
//------------------------------------------------------------------------------
const readNote = (title) => {
    const notes = loadNotes()
    const foundNote = notes.find((note) => note.title === title)

    if (foundNote) {
        console.log(chalk.green(foundNote.title))
        console.log(foundNote.body)

    } else {
        console.log(chalk.red('NOTE NOT FOUND'))
    }
}
//------------------------------------------------------------------------------
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}
//------------------------------------------------------------------------------
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}
//------------------------------------------------------------------------------
module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}