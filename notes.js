const fs = require('fs')

const getNotes = () => 'Your notes...'

const addNote = (title, body) => {
  const notes = _loadNotes()
  const duplicateNotes = notes.filter(n => n.title === title)
  if (duplicateNotes.length === 0) {
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
    console.log('Could not find note: ' + title)
  } else {
    console.log('Removing note: ' + title)
    _saveNotes(newNotes)
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
  getNotes,
  addNote,
  removeNote
}
