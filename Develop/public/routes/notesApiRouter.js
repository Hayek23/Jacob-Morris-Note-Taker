const router = require('express').Router();
const path = require('path');


// receives saved notes
router.get('/', (req, res) => {
    console.info(`${req.method} request received for notes`);
    readFromFile('../db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST route for new notes
router.post('/', (req, res) => {
    console.info(`${req.method} new note added`);

    const { noteTitle, noteText} = req.body;

    if (noteTitle && noteText) {
        const newNote = {
            noteTitle,
            noteText,
        };
        
        readAndAppend(newNote, '../db/db.json');

        const response = {
            status: 'success',
            bosy: newNote,
        };

        res.json(response);
    } else {
        res.json('Error in posting new note')
    };
});

module.export = router