const chalk = require('chalk')
const getNotes = require('./notes')

const command = process.argv[2]

switch (command) {
  case 'add':
    console.log('Adding note')

  default:
    console.log('Unknown command')
}
