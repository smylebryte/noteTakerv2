const express = require('express');
const router = require('express').Router();
const db = require('../db/db');
const fs = require('fs');
var uniqid = require('uniqid');
// const { uuid } = require('uuidv4');

router.get('/api/notes', (req, res) => {
  fs.readFile('./db/db.json', 'utf8', (err, data) => {
    res.json(JSON.parse(data));
  });
});

router.post('/api/notes', (req, res) => {
  fs.readFile('./db/db.json', 'utf8', (err, data) => {
    const notesDB = JSON.parse(data);
    const newNote = {
      title: req.body.title,
      text: req.body.text,
      id: uniqid(),
    };
    notesDB.push(newNote);
    fs.writeFile('./db/db.json', JSON.stringify(notesDB), err => {
      if (err) console.log(err);
      res.json(data);
    });
  });
});

router.delete('/api/notes/:id', (req, res) => {
  const noteId = req.params.id;
  fs.readFile('./db/db.json', 'utf8', (err, data) => {
    const notesDB = JSON.parse(data);
    for (let i = 0; i < notesDB.length; i++) {
      if (noteId === notesDB[i].id) {
        notesDB.splice([i], 1);
        fs.writeFile('./db/db.json', JSON.stringify(notesDB), err => {
          if (err) console.log(err);
          res.json(data);
        });
      }
    }
  });
});

module.exports = router;

// const newNote = req.body;
// fs.writeFile('./db/db.json', JSON.stringify(newNote), err => {
//   if (err) console.log(err);
// });
// router.get('/api/notes', (req, res) => {
//   let dbNotes = JSON.parse(fs.readFile('../db/db.json', 'utf-8'));
//   return res.json(dbNotes);
// });
// router.get('/notes', (req, res) => {
//   notesDB.getNotes();

//   return res.json(notes);
// });

// [
//   {
//     "title": "Test Title",
//     "text": "Test text"
//   },
//   {
//     "title": "Note 2",
//     "text": "Note text 2"
//   },
//   {
//     "title": "Note 3",
//     "text": "Note text 3"
//   }
// ]
