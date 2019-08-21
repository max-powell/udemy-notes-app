const chalk = require('chalk')
const yargs = require('yargs')

const notes = require('./notes')

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Title of new note',
      demandOption: true,
      type: 'string',
      alias: 't'
    },
    body: {
      describe: 'Text of note',
      demandOption: true,
      type: 'string',
      alias: 'b'
    }
  },
  handler({title, body}) {
    notes.addNote(title, body)
  }
})

yargs.command({
  command: 'remove',
  describe: 'Removes a note',
  builder: {
    title: {
      describe: 'Note to be removed',
      demandOption: true,
      type: 'string',
      alias: 't'
    }
  },
  handler({title}) {
    notes.removeNote(title)
  }
})

yargs.command({
  command: 'list',
  describe: 'Lists all notes',
  handler() {
    notes.listNotes()
  }
})

yargs.command({
  command: 'read',
  describe: 'Reads a note',
  builder: {
    title: {
      describe: 'Title of the note to be read',
      demandOption: true,
      type: 'string',
      alias: 't'
    }
  },
  handler({title}) {
    notes.readNote(title)
  }
})

yargs.parse()
