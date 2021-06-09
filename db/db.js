const fs = require('fs');
const { uuid } = require('uuidv4');

class NotesDB {
  getNotes() {
    fs.readFile('db.json', 'utf-8', (err, notes) => {
      if (err) throw err;
      console.log(notes);
    });
  }
}

module.exports = new NotesDB();
