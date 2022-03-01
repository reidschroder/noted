const router = require('express').Router();
//const { findById, createNewNote, validateNote } = require('../../lib/notes');
const { notes } = require('../../db/db.json');




//=========GET============
router.get('/notes', (req, res) => {
    let results = notes;
        res.json(results);
});

//=========POST===========
router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();

//     if (!validateNote(req.body)) {
//         res.status(400).send('The note is not properly formatted')
//     } else {
//         const note = createNewNote(req.body, notes);
//         res.json(note);
//     }
});

// router.post('/notes', (req, res) => {
//     res.sendFile(__dirname + notes);
//     res.json(req.body);
// });

//=================DELETE===========

module.exports = router;