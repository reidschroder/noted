const router = require('express').Router();
const notes = require('../../db/db.json');


//=========GET============
router.get('/notes', (req,res) => {
    res.json(notes);
});

//=========POST===========
router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
});

module.exports = router;