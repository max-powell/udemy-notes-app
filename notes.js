const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
  const notes = _loadNotes()
  const duplicateNote = notes.find(n => n.title === title)
  if (!duplicateNote) {
    notes.push({title, body})
    _saveNotes(notes)
  } else {
    console.log('Note taken')
  }
}

const removeNote = title => {
  const notes = _loadNotes()
  const newNotes = notes.filter(n => n.title !== title)
  if (notes.length === newNotes.length) {
    console.log(chalk.bgRed('Could not find note: ' + title))
  } else {
    console.log(chalk.bgGreen('Removing note: ' + title))
    _saveNotes(newNotes)
  }
}

const listNotes = () => {
  const notes = _loadNotes()
  console.log(chalk.black.bgWhite('Your notes:'))
  notes.forEach(n => {
    console.log(n.title + ':\n' + n.body);
  })
}

const readNote = title => {
  const notes = _loadNotes()
  const note = notes.find(n => n.title === title)
  if (note) {
    console.log(chalk.black.bgWhite(note.title + ':') + '\n' + note.body)
  } else {
    console.log(chalk.bgRed('Could not find note: ' + title));
  }
}

const _loadNotes = () => {
  try {
    const notesJson = fs.readFileSync('notes.json').toString()
    return JSON.parse(notesJson)
  } catch (error) {
    return []
  }
}

const _saveNotes = (notes) => {
  const jsonNotes = JSON.stringify(notes)
  fs.writeFileSync('notes.json', jsonNotes)
}

module.exports = {
  addNote,
  removeNote,
  listNotes,
  readNote
}
