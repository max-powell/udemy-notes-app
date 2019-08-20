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
  handler: function(argv) {
    notes.addNote(argv.title, argv.body)
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
  handler: function({title}) {
    notes.removeNote(title)
  }
})

yargs.command({
  command: 'list',
  describe: 'Lists all notes',
  handler: function() {
    console.log('Listing notes')
  }
})

yargs.command({
  command: 'read',
  describe: 'Reads a note',
  handler: function () {
    console.log('Reading note')
  }
})

yargs.parse()
