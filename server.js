const express = require ("express");
const bodyParser = require("body-parser");
const apiRoutes = require("./routes/notes");
const htmlRoutes = require("./routes/html");
// const path = require("path");

const PORT = process.env.port || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use("/api", apiRoutes )
app.use("/", htmlRoutes )

// app.get('/notes', (req, res) =>{
//     res.sendFile(path.join(__dirname, '/public/notes.html'))
// });

// app.get('/', (req, res) =>{
//     res.sendFile(path.join(__dirname, '/public/index.html'))
// });

app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`));