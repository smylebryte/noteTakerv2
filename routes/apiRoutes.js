const express = require('express');
const router = require('express').Router();
const db = require('../db/db');
const fs = require('fs');

router.get('/api/notes', (req, res) => {
  fs.readFile('./db/db.json', (err, data) => {
    res.send(data);
  });
});

router.post('/api/notes', (req, res) => {
  const newNote = req.body;
});

router.delete('/api/notes/:id', (req, res) => {
  const noteId = req.params.id;
});

module.exports = router;

// router.get('/api/notes', (req, res) => {
//   let dbNotes = JSON.parse(fs.readFile('../db/db.json', 'utf-8'));
//   return res.json(dbNotes);
// });
// router.get('/notes', (req, res) => {
//   notesDB.getNotes();

//   return res.json(notes);
// });

// router.get("/", (req, res) => {
//   let existingNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"));

//   res.json(existingNotes);
// });
