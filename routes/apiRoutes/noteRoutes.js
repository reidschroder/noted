//=========Constants for Express and Node============
const router = require('express').Router();
const fs = require('fs');
const path = require('path');



//=========GET============
router.get('/notes', (req, res) => {
    let notes = fs.readFileSync(path.join(__dirname, '../../db/db.json'));
    notes = JSON.parse(notes);
    let results = notes;
        res.json(results);
});

//==========Generate Random Hexidecimal ID for each note=============
function generateId() {
    const hex = "abcdef123456";
    let id = "";
    for (let i = 0; i < 10; i++) {
        let randomIndex = Math.floor(Math.random() * hex.length);
        id += hex[randomIndex];
    }
    return id;
}

//=========POST===========
router.post('/notes', (req, res) => {
    const newNote = req.body;
    newNote.id = generateId();
    const notes = require('../../db/db.json');
    notes.push(newNote);
    fs.writeFileSync(path.join(__dirname, '../../db/db.json'), JSON.stringify(notes));
    res.json(notes);
});





//=================DELETE===========
router.delete('/notes/:id', (req, res) => {
    let noteId = req.params.id;
    let notes = fs.readFileSync(path.join(__dirname, '../../db/db.json'));
    notes = JSON.parse(notes);
    notes = notes.filter(note => {
        return note.id != noteId;
    })
    res.json(notes);
    fs.writeFileSync(path.join(__dirname, '../../db/db.json'), JSON.stringify(notes));
    
});

module.exports = router;