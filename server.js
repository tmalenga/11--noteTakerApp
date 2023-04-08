const express = require ("express");
const bodyParser = require("body-parser");
const apiRoutes = require("./routes/notes");

const PORT = process.env.port || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use("/api", apiRoutes )

app.get('/notes', (req, res) =>{
    res.sendFile(__dirname + '/public/notes.html')
});

// GET request for notes
// app.get('/api/db', (req, res) => {
//     res.status(200).json(notes);
// });

// app.post('/api/db', (req, res) => {
//     console.info(`${req.method} request recieved by the user`);

//     const {text, title} = req.body;

//     if (text && title){
//         const newNote = {text, title};  
        
//         const response = {
//             status: 'success',
//             body: newNote,
//         };

//         console.log(response);
//         res.status(201).json(response);

//     } else {
//         res.status(500).json('Error in posting review');
//     }

// });

app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`));