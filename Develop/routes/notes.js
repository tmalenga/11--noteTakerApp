const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

const router = require('express').Router();
const { json } = require('express');
let notes = require('../db/db.json');
// let id = notes.length;

router.get('/notes', (req, res) => {
    res.status(200).json(notes);
});

router.post('/notes', (req, res) => {
    console.info(`${req.method} request recieved by the user`);

    const {text, title} = req.body;
    let id = uuidv4();
    
    if (text && title){
        const newNote = {id, text, title};  
        
        const response = {
            status: 'success',
            body: newNote,
        };
        
        notes.push(newNote);
        let data = JSON.stringify(notes); 
        fs.writeFileSync('./db/db.json', data); 
        
        console.log(response);
        res.status(201).json(response);

    } else {
        res.status(500).json('Error in posting review');
    }
    
});

router.delete('/notes/:id', (req, res) =>{
    console.log(req.params.id);
    notes = notes.filter(note => note.id != req.params.id);
    data = JSON.stringify(notes);
    fs.writeFileSync('./db/db.json', data);
    res.redirect('/notes')
    //res.status(204)

})

module.exports = router;